import e from"firebase";import*as t from"react";const r=()=>{const[r,o]=t.useState(void 0);return t.useEffect((()=>e.auth().onAuthStateChanged((e=>{o(e??void 0)})))),{firebaseUser:r}};export{r as useFirebaseUser};
//# sourceMappingURL=index.mjs.map
