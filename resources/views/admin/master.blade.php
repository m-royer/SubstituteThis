<!doctype html>
<html class="no-js" lang="{{ str_replace('_', '-', app()->getLocale()) }}"">
<head>
    <meta charset="utf-8">
    <link rel="icon" href="{{ asset('favicon.png') }}" />
    <link rel="stylesheet" href="/css/vendor/reset.css">
    <link rel="stylesheet" href="css/admin/style.css">
    <title>Substitute This!</title>
</head>
<body>

<div class="container">
    <div class="sidebar">
        <div class="header">
            Admin Panel
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Approve Requests</a></li>
            <li><a href="#">Edit Entries</a></li>
        </ul>
    </div>
    <div class="content">
        @yield('content')
    </div>
</div>

</body>
</html>