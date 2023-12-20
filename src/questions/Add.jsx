import React from 'react';


const testArr = [0, 8, 5, 0, 134, 0, 3, 6, 5, 0, 7, 0];

function transFunc(arr) {
    let p1 = 0, p2 = 0;
    while (arr[p1] === 0) {
        p1++;
    }
    for (let i = p1; i < arr.length; i++) {
        if (arr[i] === 0) {
            if (i > p1) {
                let tmp = arr[p1];
                arr[p1] = arr[i];
                // arr[i] = tmp;
                while (arr[p1] === 0) {
                    p1++;
                }
                for (let j = p1; j < i; j++) {
                    const n = arr[j];
                    arr[j] = tmp;
                    arr[j + 1] = n;
                    tmp = n;
                }
            }
        }
    }
    return arr;
}

// 77 组合
/*
    输入：n = 4, k = 2
    输出：
    [
      [2,4],
      [3,4],
      [2,3],
      [1,2],
      [1,3],
      [1,4],
    ]
 */
function combine(n, k) {
    const rs = [];

    function dfs(cur, temp = []) {
        if (temp.length === k) {
            rs.push([...temp]);
            return;
        }
        for (let i = cur; i <= n; i++) {
            temp.push(i);
            dfs(i + 1, temp);
            temp.pop();
        }
    }

    dfs(1, []);
    return rs;
}

/**
 * 46 全排列
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
function permute(nums = []) {
    const len = nums.length;
    const rs = [];

    function dfs(temp = []) {
        if (temp.length === len) {
            rs.push([...temp]);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (!temp.includes(nums[i])) {
                temp.push(nums[i]);
                dfs(temp);
                temp.pop();
            }
        }
    }

    dfs([]);
    return rs;
}


const Add = () => {
    return (
        <div>啦啦啦啦 rs = {JSON.stringify(permute([1, 2, 3]))}</div>
    )
}

export default Add;