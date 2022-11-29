

function IngresarSalario() {
  return (
<body>
    <form action="">
        <br />
        <hr />
        <center><h1>Ingresar Salario</h1>
        <hr/>
        
        <div class="col-sm-10">
            <select>
                <option>Administrativo</option>
                <option>Lógistico</option>
                <option>Técnico</option>
                <option>Sistemas</option>
              </select>
        </div>
        
        <hr/>
        <div class="col-sm-10">
            <input type="number" class="form-control form-control-user" id="exampleLastName" placeholder="$" />
        </div>
        <hr/>
        <div  class="col-sm-10"> <input type="datetime-local" class="form-control form-control-user" id="exampleRepeatPassword"
            placeholder="fecha" /></div>
       
        <hr /> 
        <div class="col-sm-2"><a href="login.html" type="submit" class="btn btn-primary btn-user btn-block">
             Enviar
        </a></div>
    </center>
    </form>
</body>
);
}

export default IngresarSalario;