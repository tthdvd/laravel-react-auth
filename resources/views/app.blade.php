<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, width=device-width"/>

    <title>Laravel & React</title>
    <script>
        if('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(function() { console.log("Service Worker Registered"); });
        }
    </script>

</head>

<body>
<div id="app"></div>
<script src="{{asset('js/app.js')}}"></script>

</body>

</html>
