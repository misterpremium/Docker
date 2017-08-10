<?php require_once('Connections/connBD.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>
 
<body>
<?php 
 
echo "Nombre Temporal: ".$_FILES['archivo']['tmp_name'].'<br>';
echo "Tamaño del Archivo: ".$_FILES['archivo']['size'].'<br>';
echo "Tipo de Archivo: ".$_FILES['archivo']['type'].'<br>';
echo "Nombre del Archivo: ".$_FILES['archivo']['name'].'<br>';
echo "<br>";
/*
$destino = "\Excel".$_FILES['archivo']['name'];
$origen = $_FILES['archivo']['tmp_name'];
if(move_uploaded_file($origen,$destino) == true)
    echo 'Subido con Éxito'.'<br>';
else
    echo 'WTF!!!!';
*/
 
$fp = fopen ( $_FILES['archivo']['tmp_name'] , "r" );
echo '<table width="700">';
while (( $data = fgetcsv ( $fp , 2048, ";")) !== false ) // Mientras hay líneas que leer...
    { 
        $i = 0;
        foreach($data as $row) 
        {
            echo '<tr>';    
                echo '<td>'.$row.'</td>';        // Muestra todos los campos de la fila actual
            echo '</tr>';
            $i++ ;
        }
    }
echo '</table>';
fclose($fp);
?>
</body>
</html>