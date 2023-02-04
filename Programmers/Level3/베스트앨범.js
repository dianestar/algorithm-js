const solution = (genres, plays) => {
    const answer = [];
    const len = genres.length;
    
    // 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
    const countPerGenres = {};
    for (let i=0; i<len; i++) {
        if (!countPerGenres[genres[i]]) countPerGenres[genres[i]] = plays[i];
        else countPerGenres[genres[i]] += plays[i];
    }
    const sortedGenres = Object.entries(countPerGenres).sort(([,a], [,b]) => b - a);
    
    /* 2~3번 조건 solution #1
    const musicList = [];
    for (let i=0; i<len; i++) {
        musicList.push({id: i, genre: genres[i], play: plays[i]});    
    }
    musicList.sort((a, b) => {
        // 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
        if (a.play === b.play) return a.id - b.id;
        // 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
        return b.play - a.play;
    });
    
    const genreLen = sortedGenres.length;
    // worst case 복잡도 100 * 10,000 = 1,000,000 OK?!
    for (let i=0; i<genreLen; i++) { // 장르 종류는 100개 미만
        let currentGenre = sortedGenres[i][0];
        let count = 0;
        
        for (let j=0; j<len; j++) { // genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하
            if (musicList[j].genre === currentGenre) {
                answer.push(musicList[j].id);
                count++;    
            }
            if (count === 2) break;
        }
    }
    */
    
    /* 2~3번 조건 solution #2 */
    // worst case 복잡도 100 * 2 * 10,000 = 2,000,000 OK?!
    const genreLen = sortedGenres.length;
    const added = Array(len).fill(0); // 이미 수록된 노래 표시
    for (let i=0; i<genreLen; i++) { // 장르 종류는 100개 미만
        let currentGenre = sortedGenres[i][0];
        for (let j=0; j<2; j++) { // 가장 많이 재생된 노래를 2개씩 모아야 하므로 한 장르 당 2번씩 탐색
            // 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
            let maxPlay = 0;
            // 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
            let minId = len;
            for (let k=0; k<len; k++) { // genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하
                if (genres[k] === currentGenre && plays[k] > maxPlay && !added[k]) {
                    maxPlay = plays[k];
                    minId = k;
                }
            }
            
            if (minId === len) continue; // 최대 2개이므로 1개만 수록하고 수록할 곡이 없을 수도 있음
            
            added[minId] = 1;
            answer.push(minId);
        }
    }
    
    return answer;
}