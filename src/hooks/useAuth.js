// "use client";

// import { AuthContext } from "@/app/Contexts";
// import { useContext } from "react";

// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     console.error("AuthContext is undefined. Ensure AuthProvider is wrapping the component.");
//     return { auth: null, setAuth: () => {} }; // Return fallback to avoid errors
//   }

//   const { auth, setAuth } = context;
//   return { auth, setAuth };
// };
