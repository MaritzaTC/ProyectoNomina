
import './App.css';

function Buscar() {
  return (
<body id="page-top">

    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">


        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <form class="form-inline">
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>
                    </form>

                    {/* <!-- Topbar Search --> */}

                    

                </nav>
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div class="container-fluid">
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <hr />
                        <center>
                            <h1>Buscar</h1>
                        </center>
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
                    <hr />


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
                                            <th>Name</th>
                                            <th>Apellido</th>
                                            <th>cargo</th>
                                            <th>Telefono</th>
                                            <th>Cedula</th>
                                            <th>Fecha de ingreso</th>
                                            <th>Salario</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>Edinburgh</td>
                                            <td>System Architect</td>
                                            <td>321678945</td>
                                            <td>611454</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>

                                    </tbody>

                                </table>
                                <center>
                                    <a href="" class="btn alert-danger">Borrar</a>
                                    <a href="" class="btn alert-primary">Editar</a>
                                </center>

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

    {/* <!-- Logout Modal--> */}
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Bootstrap core JavaScript--> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    {/* <!-- Core plugin JavaScript--> */}
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    {/* <!-- Custom scripts for all pages--> */}
    <script src="js/sb-admin-2.min.js"></script>

    {/* <!-- Page level plugins --> */}
    <script src="vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

    {/* <!-- Page level custom scripts --> */}
    <script src="js/demo/datatables-demo.js"></script>

</body>
);
}

export default Buscar;