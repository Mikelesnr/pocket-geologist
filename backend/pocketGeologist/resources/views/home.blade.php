<html>
<head>
    <title>Get User Details in laravel</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <style>
        .card{
            width: 18rem;
            margin: auto;
        }
    </style>
</head>
<body class="text-center">
<h4 class="mt-2"> How to get current user details in laravel</h4>
<a href="https://impulsivecode.com">impulsivecode.com</a>
<div>
    <br>
    <div class="card text-center">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>IP:</strong> {{ $data->ip }}</li>
            <li class="list-group-item"><strong>Country:</strong> {{ $data->countryName }} </li>
            <li class="list-group-item"><strong>Country Code:</strong> {{ $data->countryCode }} </li>
            <li class="list-group-item"><strong>Region:</strong> {{ $data->regionName }} </li>
            <li class="list-group-item"><strong>Region Code:</strong> {{ $data->regionCode }} </li>
            <li class="list-group-item"><strong>City:</strong> {{ $data->cityName }} </li>
            <li class="list-group-item"><strong>Zip Code:</strong> {{ $data->zipCode }} </li>
            <li class="list-group-item"><strong>Latitude:</strong> {{ $data->latitude }} </li>
            <li class="list-group-item"><strong>Longitude:</strong> {{ $data->longitude }} </li>
        </ul>
    </div>



</div>
</body>
</html>