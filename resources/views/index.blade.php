<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>NYKS Web</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <!-- Styles -->
    <link rel="stylesheet" href="{{mix('css/main.css')}}">

</head>

<body>
    <div id="app"></div>
    <script src="{{mix('js/app.js')}}"></script>
</body>

</html>