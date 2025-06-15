// export default function Navbar({session}) {
//   return (
//     <div className="flex justify-between items-center">
      
//       {session.status === "authenticated" && (
//         <div>
//           <h1>Welcome {session.user.name}</h1>
//           <button onClick={() => session.signOut()}>Sign out</button>
//         </div>
//       )}
//       {session.status === "unauthenticated" && (
//         <button onClick={() => session.signIn()}>Sign in</button>
//       )}    
//     </div>
//   )
// }