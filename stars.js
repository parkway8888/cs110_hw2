<script>
  const space =function(npaces){
    if (npaces==0){
    return "";  
    }
    return " " + space(npaces-1);
  }
  const star= function(nstar){
    if (nstar==0){
    return"";
    }
  	return "*"+ star(nstar -1);
  }
  const triangleStars = function(row){
    if (row ==0){
    return"";
    }
    return triangleStars(row-1) + "\n"+ space(lines-row)+star(2*row-1);
    
  }
  
  
  
  console.log(triangleStars(lines=5));
  
</script>
				