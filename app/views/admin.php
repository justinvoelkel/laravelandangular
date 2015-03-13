<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Laravel and Angular">
    <meta name="author" content="Justin Voelkel">

    <title>Blog Administration</title>
    <!--css-->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="styles/styles.css"/>

    <!--js-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

    <!--angular-->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.js"></script>

    <!--angular resources-->
    <script src="js/app.js"></script>

    <!--angular controllers-->
    <script src="js/controllers/loginController.js"></script>
    <script src="js/controllers/postController.js"></script>

    <!--angular services-->
    <script src="js/services/authService.js"></script>
    <script src="js/services/crudService.js"></script>


</head>
<body ng-app="blogApp">
    <div id="wrapper">
        <div class="container" id="view" ng-view>

        </div>
    </div>
</body>
</html>