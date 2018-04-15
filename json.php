<?php
   $json = $_POST['json'];
   $info = json_encode($json);

   $the_id = rand(0, 10000);
   $file = fopen('new_map_data'.$the_id.'.json','w+');
   fwrite($file, $info);
   fclose($file);

/*   $data[] = $_POST['data'];
   $inp = file_get_contents('results.json');
   $tempArray = json_decode($inp);
   array_push($tempArray, $data);
   $jsonData = json_encode($tempArray);
   file_put_contents('results.json', $jsonData);*/
?>
