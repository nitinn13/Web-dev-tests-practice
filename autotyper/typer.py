import tkinter as tk
from tkinter import ttk
import pyautogui
import threading
import time


class AutoTyper:
    def __init__(self):
        self.typing = False

    def start_typing(self):
        text = text_entry.get("1.0", tk.END).strip()
        if not text:
            window.after(0, lambda: result_label.config(text="Please enter text to type.", foreground="red"))
            return

        try:
            speed = float(speed_entry.get().strip())
        except ValueError:
            window.after(0, lambda: result_label.config(text="Invalid typing speed! Enter a number.", foreground="red"))
            return

        lines = text.splitlines()
        # Adjust speed interval to faster rates
        seconds_per_character = max(0.001, 60 / (speed * 5))  # Ensure a minimum interval of 1 ms
        self.typing = True

        window.after(0, lambda: result_label.config(text="Starting in 3 seconds...", foreground="blue"))
        window.after(0, toggle_buttons)

        def delayed_start():
            # Wait 3 seconds before typing
            for _ in range(3):
                if not self.typing:
                    break
                time.sleep(1)

            for line in lines:
                if not self.typing:
                    break

                # Typing each character individually to preserve spaces
                for char in line:
                    if not self.typing:
                        break
                    pyautogui.write(char, interval=seconds_per_character)

                # Move to the next line
                pyautogui.press("enter")

            # Update UI after typing
            window.after(0, lambda: result_label.config(
                text="Typing complete!" if self.typing else "Typing stopped.", foreground="green"
            ))
            self.typing = False
            window.after(0, toggle_buttons)

        threading.Thread(target=delayed_start, daemon=True).start()

    def stop_typing(self):
        self.typing = False

    def toggle_typing(self):
        if self.typing:
            self.stop_typing()
        else:
            threading.Thread(target=self.start_typing, daemon=True).start()


# Create AutoTyper instance
auto_typer = AutoTyper()

# Toggle button states
def toggle_buttons():
    start_button.config(state=("disabled" if auto_typer.typing else "normal"))
    stop_button.config(state=("normal" if auto_typer.typing else "disabled"))


# Bind F10 key to toggle typing
def on_f10_key(event):
    auto_typer.toggle_typing()


# Set up the main window
window = tk.Tk()
window.title("Enhanced Auto Typer")
window.geometry("500x500")
window.configure(bg="#f0f0f0")

window.bind('<F10>', on_f10_key)

frame = ttk.Frame(window, padding="20 20 20 20")
frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))

# Title
title_label = tk.Label(frame, text="Auto Typer", font=("Helvetica", 18, "bold"), bg="#f0f0f0", fg="#333")
title_label.grid(row=0, column=0, columnspan=2, pady=10)

# Text Entry
text_label = ttk.Label(frame, text="Enter text to type:", font=("Helvetica", 12))
text_label.grid(row=1, column=0, sticky=tk.W, pady=5)

text_entry = tk.Text(frame, height=10, width=40, font=("Helvetica", 10))
text_entry.grid(row=2, column=0, columnspan=2, pady=5)

# Typing Speed
speed_label = ttk.Label(frame, text="Typing speed (WPM):", font=("Helvetica", 12))
speed_label.grid(row=3, column=0, sticky=tk.W, pady=5)

speed_entry = ttk.Entry(frame, font=("Helvetica", 10), width=10)
speed_entry.grid(row=3, column=1, pady=5)
speed_entry.insert(0, "800")  # Default speed set to 800 WPM

# Start/Stop Buttons
start_button = ttk.Button(frame, text="Start Typing (F10)", command=auto_typer.toggle_typing, style="TButton")
start_button.grid(row=4, column=0, pady=15)

stop_button = ttk.Button(frame, text="Stop Typing", command=auto_typer.stop_typing, style="TButton", state="disabled")
stop_button.grid(row=4, column=1, pady=15)

# Status Label
result_label = tk.Label(frame, text="", font=("Helvetica", 12), bg="#f0f0f0")
result_label.grid(row=5, column=0, columnspan=2, pady=10)

# Style
style = ttk.Style()
style.configure("TButton", font=("Helvetica", 12, "bold"), foreground="blue", padding=10)

window.mainloop()
