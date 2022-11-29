
function ReportesPago() {
  return (
<body id="page-top">

    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">

        <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                <div class="container-fluid">
                    <form
                    
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                       <hr/> <center><h1>Generar Reportes </h1></center>
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Documento"
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                        <hr/>
                        <input type="datetime-local" class="form-control form-control-user"
                                id="exampleRepeatPassword" placeholder="fecha"/>
                         <hr/>
                         <hr/>
                          {/* <!-- Page Heading --> */}
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                      
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generar reporte</a>
                    </div>       
                    </form>
                    {/* <!-- Page Heading --> */}
                    <hr/>
                    

  

    </div>
    {/* <!-- End of Page Wrapper --> */}

    {/* <!-- Scroll to Top Button--> */}
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
</div></div>
</div>

</body>);
}

export default ReportesPago;