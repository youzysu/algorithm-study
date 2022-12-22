function solution(s) {
    var answer = [-1];
    
    for(let i=1;i<s.length;i++){
        var substr=s.substring(0,i);
        if(substr.includes(s[i])){
            answer.push(i-substr.lastIndexOf(s[i]));            
        }else{
            answer.push(-1);
        }
    }
    return answer;
}

