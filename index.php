<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quran Web App</title>
    <link rel="stylesheet" href="styles.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        /* Style the audio player container */
        .audio-container {
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            padding: 10px;
            width: 300px;
            text-align: center;
            margin:20px auto;
            
        }

        /* Style the audio controls (play, pause, volume, etc.) */
        audio {
            width: 100%;
        }
    </style>
</head>
<body>
    <div id="top"><span></span><br/><span></span><br/><span></span><br/><span></span><br/><span></span></div>
    <h1 style="margin-top:20px;text-align:center;color: rgba(30, 30, 248, 0.322);">QURAN WEB APP</h1>
    <p style="font-size:1.3em;margin-top:20px;text-align:center;color: rgba(30, 30, 248, 0.322);">Listen • memorize</p>
    <div class="audio-container">
        <audio id="aud" controls>
            
        </audio>
    </div>
    <div style="text-align: center;">
    <select id="select">

    </select>
</div>
    <script src="app.js"></script>
</body>
</html>