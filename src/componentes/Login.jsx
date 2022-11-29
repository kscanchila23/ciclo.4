import React, {useState} from 'react'

export function Login(){
    return(
        <main class="iniciar sesion">

  <form>
    
    <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Correo electronico</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Contraseña</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Recordar contraseña
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Acceder</button>
    
  </form>
</main>
    )
}