function solution(my_string, overwrite_string, s) {
    var answer = '';
    answer = my_string.slice(0, s) + overwrite_string;
    
    if (answer.length < my_string.length) {
        var count = my_string.length - answer.length;
        answer = answer + my_string.slice(-count);
    }
    
    return answer;
    
}