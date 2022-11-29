

function Reportes() {
  return (
<body id="page-top">

    {/* <!-- Page Wrapper --> --> */}
    <div id="wrapper">
        
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> --> */}
            <div id="content">
            <center><h1>Reportes</h1></center>
                <div className="container-fluid">
                  
                    <div className="card shadow mb-4">
                    <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Usuarios que devengan más de un salario x </h6>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Usuarios que devengan menos de un salario x </h6>
                                </div>
                                </div>                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Cédula</th>
                                                    <th>Salario</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>451645</td>
                                                   <th>3'000.000</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="col-sm-6">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Cédula</th>
                                                    <th>Salario</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>451645</td>
                                                   <th>3'000.000</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            </div>
                       
                    </div>
                    
                </div>
                {/* <!-- /.container-fluid --> --> */}

            </div>
            {/* <!-- End of Main Content --> --> */}

           

        </div>
        {/* <!-- End of Content Wrapper --> --> */}

    </div>
    {/* <!-- End of Page Wrapper --> --> */}

    {/* <!-- Scroll to Top Button--> --> */}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

   

</body>);
}

export default Reportes;