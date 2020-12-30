<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        /*
            var a =function test(){
    
            }
            alert('asasasa')
            (
                function(){
    
                }()
            )
            به صورت خود کار فرا خوانی می شود*/

        function test(/*a,b*/) {

            var d = 0;

            alert(arguments.length);//تعداد مغادیر
            alert(arguments[0]);//مغدار اول
            for (var a in arguments) {
                console.log(arguments[a]);
                d += arguments[a];
            }
            alert(d)
        }
        test(10, 20, 30, 40, 50);





    </script>
</head>

<body>

</body>

</html>
