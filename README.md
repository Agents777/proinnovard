<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Proinnovard - Sistemas y Proyectos</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* Estilos generales */
        body {
            font-family: 'Helvetica Neue', sans-serif;
            color: #333;
            background-color: #f0f4f8;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #004080;
            color: white;
            padding: 2rem 1rem;
            text-align: center;
        }

        h1 {
            font-size: 2.8rem;
            font-weight: bold;
        }

        p {
            font-size: 1.1rem;
            margin-top: 0.5rem;
        }

        /* Navegación minimalista */
        .navbar {
            background-color: white;
            padding: 1rem;
            border-bottom: 2px solid #004080;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .navbar-brand {
            color: #004080;
            font-weight: bold;
        }

        .navbar-nav .nav-link {
            color: #004080;
            font-size: 1.1rem;
        }

        .navbar-toggler {
            color: #004080;
            border: none;
        }

        .navbar-toggler-icon {
            color: #004080;
        }

        /* Sección de productos */
        .container {
            padding: 2rem 0;
        }

        .product-img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            transition: transform 0.3s ease;
        }

        .product-img:hover {
            transform: scale(1.05);
        }

        h2 {
            font-size: 1.75rem;
            color: #004080;
            font-weight: bold;
            margin-top: 1rem;
        }

        .btn {
            background-color: #ff6600;
            color: white;
            padding: 0.75rem 1.5rem;
            margin-top: 1rem;
            border: none;
            transition: background-color 0.3s ease;
        }

        .btn:hover {
            background-color: #cc5200;
        }

        /* Footer minimalista */
        footer {
            background-color: #004080;
            color: white;
            text-align: center;
            padding: 1.5rem 0;
            position: relative;
            bottom: 0;
            width: 100%;
        }

        footer a {
            color: white;
            margin: 0 0.5rem;
        }

        footer a:hover {
            color: #ff6600;
        }

        /* Animaciones suaves */
        a.nav-link:hover {
            color: #ff6600;
            transition: color 0.3s ease;
        }

        /* Estilos responsivos */
        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.5rem;
            }

            .btn {
                padding: 0.5rem 1rem;
            }
        }
    </style>
</head>

<body>
    <header>
        <h1>Proinnovard - Innovación en Sistemas y Proyectos</h1>
        <p>Soluciones Tecnológicas Avanzadas para tu Negocio</p>
    </header>

    <!-- Navegación Intuitiva -->
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Proinnovard</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Sección de productos -->
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-4">
                <img src="https://via.placeholder.com/300" class="product-img" alt="Producto 1">
                <h2>Sistema Avanzado de Gestión</h2>
                <p>Un sistema avanzado para la gestión integral de empresas, que automatiza tareas como la gestión de inventarios, recursos humanos y facturación, permitiendo una mayor eficiencia operativa.</p>
                <button class="btn">Comprar ahora</button>
            </div>
            <div class="col-md-4 mb-4">
                <img src="https://via.placeholder.com/300" class="product-img" alt="Producto 2">
                <h2>Software de Realidad Aumentada</h2>
                <p>Permite a los usuarios visualizar productos en su entorno real a través de dispositivos móviles, ideal para el sector retail, decoración o educación.</p>
                <button class="btn">Comprar ahora</button>
            </div>
            <div class="col-md-4 mb-4">
                <img src="https://via.placeholder.com/300" class="product-img" alt="Producto 3">
                <h2>Inteligencia Artificial para Negocios</h2>
                <p>Soluciones basadas en IA para personalizar la experiencia del cliente, analizar datos de mercado y optimizar las estrategias comerciales para mayor rendimiento.</p>
                <button class="btn">Comprar ahora</button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Proinnovard. Todos los derechos reservados.</p>
        <a href="#"><i class="fa fa-facebook-f"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
    </footer>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
</body>

</html>
