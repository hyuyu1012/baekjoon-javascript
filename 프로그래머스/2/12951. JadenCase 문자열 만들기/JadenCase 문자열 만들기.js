


function solution(s) {
    const answer  = [];
    const word = s.split(" ");
    for (let i = 0; i < word.length; i++) {
        const temp = word[i].trim().split("").map(c => c.toLowerCase())
        if(temp[0] && !Number(temp[0])) { // NaN 은 자기자신인 NaN과도 같지 않다...!
           temp[0] = temp[0].toUpperCase();
        }
        answer.push(temp.join(""));
    }    
    
    return answer.join(" ");
}
