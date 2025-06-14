interface PropType {
  placeholder: string;
  onChange: (e: any) => void;
}



export function TextInput({placeholder, onChange}: PropType) {
  return (
      <input onChange={onChange} placeholder={placeholder} />
    
  );
}