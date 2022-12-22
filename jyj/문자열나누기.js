function solution(s) {
    var cnt = 0;
    var substrlen=0;
    var startIdx=0;
    var semi_cnt=0;
    for(let i=0;i<s.length;i++){
        substrlen++;
        if(s[i]===s[startIdx]){
            semi_cnt++;
        }else{
            if(semi_cnt===substrlen-semi_cnt){
                console.log(substrlen);
                startIdx=i+1;
                substrlen=0;
                semi_cnt=0;
                cnt++;
                
            
            } 
        }
        
    }
    if(substrlen) cnt++;
    return cnt;
}
