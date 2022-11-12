const solution = (info, edges) => {
    let answer = 0;
    
    // 노드 연결 정보 저장
    const linked = Array.from(new Array(info.length), () => new Array());
    for (let i=0; i<edges.length; i++) {
        const parent = edges[i][0];
        const child = edges[i][1];
        linked[parent].push(child);
    }
    
    // dfs
    // 루트 노드(항상 양이 있음)에서 출발하여 각 노드를 돌아다니며 양을 모음
    // 각 노드를 방문할 때 마다 해당 노드에 있던 양과 늑대가 따라옴
    const dfs = (curArr, curNode, sheep, wolf) => {
        // 0은 양, 1은 늑대를 의미
        info[curNode] === 0 ? sheep++ : wolf++;
        
        // 양의 수보다 늑대의 수가 같거나 더 많아지면 바로 모든 양을 잡아먹어 버림
        if (sheep === wolf) return;
        
        // 각 노드를 방문하면서 모을 수 있는 양은 최대 몇 마리인지
        answer = Math.max(answer, sheep);
        
        // 이어서 방문할 수 있는 노드 정보를 담은 배열 업데이트
        const nextArr = [...curArr, ...linked[curNode]];
        nextArr.splice(curArr.indexOf(curNode), 1);
        
        // 이어서 방문할 수 있는 노드들에 대해 재귀적으로 호출
        for (let i=0; i<nextArr.length; i++) {
            const nextNode = nextArr[i];
            dfs(nextArr, nextNode, sheep, wolf);
        }
    }
    
    dfs([0], 0, 0, 0);
    
    return answer;
}

console.log(solution([0,0,1,1,1,0,1,0,1,0,1,1], [[0,1],[1,2],[1,4],[0,8],[8,7],[9,10],[9,11],[4,3],[6,5],[4,6],[8,9]]));
console.log(solution([0,1,0,1,1,0,1,0,0,1,0], 	[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[6,9],[9,10]]));