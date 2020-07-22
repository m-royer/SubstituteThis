<!doctype html>
<html class="no-js" lang="{{ str_replace('_', '-', app()->getLocale()) }}"">
<head>
    <meta charset="utf-8">
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Substitute This! A food substitute tool">
    <meta name="keywords" content="food, substitutions, allergies, allergens, healthy, replace,">
    <meta name="author" content="Michael Royer of royerwebdesign.com">
    <meta name="copyright" content="(c) 2020 Substitute This!" />
    <meta property="og:title" content="Substitute This! A Food Substitution Tool" />
    <meta property="og:type" content="website" /> 
    <meta property="og:url" content="http://substitutethis.com/" />
    <meta property="og:description" content="Don't have ingredient A? Try ingredient B!" />
    <meta property="og:image" content="http://substitutethis.com/images/share.jpg" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Substitute This! A Food Substitution Blog" />
    <meta name="twitter:description" content="Don't have ingredient A? Try ingredient B!" />
    <meta name="twitter:image" content="http://substitutethis.com/images/share.jpg" />
    <title>Substitute This!</title>
</head>
<body>

    <div id="substitute-app"></div>
    
    <script>
        // api url
        window.api = "{{ url('/api') }}";
    </script>
    <script src="{{ mix('/js/index.js') }}"></script>
</body>
</html>