@php
    $config = [
        'appName' => config('app.name'),
        'locale' => $locale = app()->getLocale(),
        'locales' => config('app.locales'),
        'facebookAuth' => config('services.facebook.client_id'),
        'googleAuth' => config('services.google.client_id'),
    ];
@endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
    </head>
    <body class="antialiased">
        {{-- Vue Js app --}}
        <div id="app"></div>

        {{-- Global configuration object --}}
        <script>window.config = @json($config);</script>

        {{-- Load the application scripts --}}
        <script src="{{ mix('dist/js/app.js') }}"></script>
    </body>
</html>
