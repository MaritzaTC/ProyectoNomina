/* eslint-disable jsx-a11y/heading-has-content */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgregarUsuario from './AgregarUsuario';
import './App.css';
import EditarUsuario from './EditarUsuario';
import ListaUsuarios from './ListaUsuario';

function Admi() {
    return (

        <div id="page-top">
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Alibaba</div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Inicio</span></a>
                    </li>

                    {/* <!--- Divider --> */}
                    <hr className="sidebar-divider" />

                    {/* <!--- Heading --> */}
                    <div className="sidebar-heading">
                        Usuarios
                    </div>

                    {/* <!--- Nav Item - Pages Collapse Menu --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw "></i>
                            <span>Usuario Nómina</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header"></h6>
                                <a className="collapse-item" href="agregarusuario">Crear</a>
                                <a className="collapse-item" href="obtenerusuarios">Buscar</a>
                                <a className="collapse-item" href="editarusuario">Editar</a>

                            </div>
                        </div>
                    </li>

                    {/* <!--- Nav Item - Pages Collapse Menu --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw "></i>
                            <span>Usuario Empleado</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header"></h6>
                                <a className="collapse-item" href="buttons.html">Crear</a>
                                <a className="collapse-item" href="cards.html">Buscar</a>
                                <a className="collapse-item" href="buttons.html">Editar</a>

                            </div>
                        </div>
                    </li>


                    {/* <!--- Divider --> */}
                    <hr className="sidebar-divider" />

                    {/* <!--- Heading --> */}
                    <div className="sidebar-heading">
                        Funciones Tipo Usuario Nómina
                    </div>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw "></i>
                            <span>Empleado</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header"></h6>
                                <a className="collapse-item" href="buttons.html">Crear</a>
                                <a className="collapse-item" href="cards.html">Buscar</a>

                            </div>
                        </div>
                    </li>




                    {/* <!--- Nav Item - Charts --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="charts.html">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Reportes</span></a>
                    </li>

                    {/* <!--- Nav Item - Tables --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="tables.html">
                            <i className="fas fa-fw "></i>
                            <span>Ingresar Salario</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw "></i>
                            <span>Novedades</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header"></h6>
                                <a className="collapse-item" href="buttons.html">Permisos</a>
                                <a className="collapse-item" href="cards.html">Vacaciones</a>

                            </div>
                        </div>
                    </li>
                    {/* <!--- Heading --> */}
                    <div className="sidebar-heading">
                        Funciones Tipo Usuario Empleado
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" href="charts.html">
                            <i className="fas fa-fw "></i>
                            <span>Información</span></a>
                    </li>
                    {/* <!--- Nav Item - Charts --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="charts.html">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Reportes</span></a>
                    </li>
                    {/* <!--- Nav Item - Utilities Collapse Menu --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw "></i>
                            <span>Solicitudes</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Tipo:</h6>
                                <a className="collapse-item" href="utilities-color.html">Vacaciones</a>
                                <a className="collapse-item" href="utilities-border.html">Permisos</a>
                            </div>
                        </div>
                    </li>



                    {/* <!--- Divider --> */}
                    <hr className="sidebar-divider d-none d-md-block" />

                    {/* <!--- Sidebar Toggler (Sidebar) --> */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>



                </ul>
                {/* <!--- End of Sidebar --> */}

                {/* <!--- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!--- Main Content --> */}
                    <div id="content">

                        {/* <!--- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* <!--- Sidebar Toggle (Topbar) --> */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            {/* <!--- Topbar Search --> */}
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* <!--- Topbar Navbar --> */}
                            <ul className="navbar-nav ml-auto">

                                {/* <!--- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="/#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    {/* <!--- Dropdown - Messages --> */}
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                {/* <!--- Nav Item - Alerts --> */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="/#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-bell fa-fw"></i>
                                        {/* <!--- Counter - Alerts --> */}
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    {/* <!--- Dropdown - Alerts --> */}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 className="dropdown-header">
                                            Permisos
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="/#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-primary">
                                                    <i className="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 12, 2022</div>
                                                <span className="font-weight-bold">Pide un permiso para el dia viernes</span>
                                            </div>
                                        </a>

                                        <a className="dropdown-item text-center small text-gray-500" href="/#">Mostrar todas las notificaciones de permisos</a>
                                    </div>
                                </li>


                                <div className="topbar-divider d-none d-sm-block"></div>

                                {/* <!--- Nav Item - User Information --> */}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="/#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Administrador</span>
                                        <img className="img-profile rounded-circle"
                                            src="img/undraw_profile.svg" alt='' />
                                    </a>
                                    {/* <!--- Dropdown - User Information --> */}
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="/#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Perfil
                                        </a>
                                        <a className="dropdown-item" href="/#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Ajustes
                                        </a>
                                        <a className="dropdown-item" href="/#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Actividad
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Salir
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="container-fluid">

                            {/* <!--- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800"></h1>
                                <a href="/#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                            </div>
                            <BrowserRouter>
                                <Routes>
                                    <Route path='/obtenerusuarios' element={<ListaUsuarios />}></Route>
                                    <Route path='/agregarusuario' element={<AgregarUsuario />}></Route>
                                    <Route path='/editarusuario/:idusuario' element={<EditarUsuario />}></Route>
                                </Routes>
                            </BrowserRouter>
                        </div>
                    </div>
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Alibaba</span>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>

        </div>



    );
}

export default Admi;
