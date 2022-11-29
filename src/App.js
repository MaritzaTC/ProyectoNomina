/* eslint-disable jsx-a11y/heading-has-content */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import AgregarUsuario from './components/AgregarUsuario';
import AgregarUsuarioEmpleado from './components/AgregarUsuarioEmpleado';
import EditarUsuario from './components/EditarUsuario';
import ListaUsuarios from './components/ListaUsuario';
import Login from './components/Login';
import Informacion from './components/Informacion';
import Reportes from './components/Reportes';
import Permisos from './components/Permisos';
import Vacaciones from './components/Vacaciones';
import IngresarSalario from './components/IngresarSalario';


function App() {
   
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
                        <a className="nav-link" href="login">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Iniciar Sesión</span></a>
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
                            <span>Usuarios</span>
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
                                <a className="collapse-item" href="agregarusuarioempleado">Crear</a>
                                <a className="collapse-item" href="cards.html">Buscar</a>
                                <a className="collapse-item" href="cards.html">Editar</a>
                            </div>
                        </div>
                    </li>




                    {/* <!--- Nav Item - Charts --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="reportes">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Reportes</span></a>
                    </li>

                    {/* <!--- Nav Item - Tables --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="ingresarsalario">
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
                                <a className="collapse-item" href="permisos">Permisos</a>
                                <a className="collapse-item" href="vacaciones">Vacaciones</a>

                            </div>
                        </div>
                    </li>
                    {/* <!--- Heading --> */}
                    <div className="sidebar-heading">
                        Funciones Tipo Usuario Empleado
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" href="information">
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
                                <a className="collapse-item" href="vacaciones">Vacaciones</a>
                                <a className="collapse-item" href="permisos">Permisos</a>
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

                           
                            {/* <!--- Topbar Navbar --> */}
                            <ul className="navbar-nav ml-auto">

                                
                            

    
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

                            <BrowserRouter>
                            <Navigate/>
                            {
                                user?(
                                    <button>Logout</button>
                                ):(
                                    <button>Login</button>
                                )
                            }
                                <Routes>
                                    <Route path='/obtenerusuarios' element={<ListaUsuarios />}></Route>
                                    <Route path='/agregarusuario' element={<AgregarUsuario />}></Route>
                                    <Route path='/agregarusuarioempleado' element={<AgregarUsuarioEmpleado />}></Route>
                                    <Route path='/editarusuario/:idusuario' element={<EditarUsuario />}></Route>
                                    <Route path='/login' element={<Login></Login>}></Route>
                                    <Route path='/information' element={<Informacion/>}></Route>
                                    <Route path='/ingresarsalario' element={<IngresarSalario/>}></Route>
                                    <Route path='/reportes' element={<Reportes/>}></Route>
                                    <Route path='/permisos' element={<Permisos/>}></Route>
                                    <Route path='/vacaciones' element={<Vacaciones/>}></Route>
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

export default App;
