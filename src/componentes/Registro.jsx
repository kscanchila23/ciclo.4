import React from 'react'

export const Registro = () => {
  return (
    <main class="registro">
   
   <form>
     
     <h1 class="h3 mb-3 fw-normal">Registro</h1>
 
     <div class="form-floating">
       <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
       <label for="floatingInput">Nombre</label>
     </div>
     <div class="form-floating">
       <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
       <label for="floatingInput">Usuario</label>
     </div>
     <div class="form-floating">
       <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
       <label for="floatingInput">Contraseña</label>
     </div>
     <div class="form-floating">
       <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
       <label for="floatingPassword">Correo</label>
     </div>
 
     
     <button class="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
     
   </form>
 </main>
  )
}
