
function  Permisos() {
  return (
<body id="page-top">

    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

     
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div class="container-fluid">
                    <form
                    
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                       <hr/> <center><h1>Permisos</h1></center>
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Documento"
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* <!-- Page Heading --> */}
                    <hr/>
                    

                    {/* <!-- DataTales Example --> */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Usuarios Alibaba</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Cédula</th>
                                            <th>Tiempo</th>
                                            <th>Razón</th>
                                            <th>Aprobar</th>
                                            <th>Rechazar</th>
                                            <th>Remunerados</th>
                                            <th>No remunerados</th>
                                            
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        <tr>
                                            <td>451645</td>
                                            <td>10 dias</td>
                                            <td>Enfermedad</td>
                                            <td> <input type="checkbox"/></td>
                                            <td> <input type="checkbox"/></td>
                                            <td> <input type="checkbox"/></td>
                                            <td> <input type="checkbox"/></td>
                                            
                                        </tr>
                                        
                                    </tbody>
                                    
                                </table>
                                
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            

        </div>
        {/* <!-- End of Content Wrapper --> */}

    </div>
    {/* <!-- End of Page Wrapper --> */}

    {/* <!-- Scroll to Top Button--> */}
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    

</body>
);
}

export default Permisos;