// HTMLの要素を取得
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// 追加ボタンの動作
addButton.addEventListener('click', function() {
    const taskText = input.value;

    if (taskText === "") return;

    // 1. li（リストの項目）を作る
    const newItem = document.createElement('li');
    newItem.textContent = taskText;

    // --- ここから追加・変更した部分 ---

    // 2. 削除ボタンを作る
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.style.marginLeft = '10px'; // 少し隙間を空ける
    
    // 3. 削除ボタンが押されたら、親である li を消す
    deleteButton.addEventListener('click', function() {
        newItem.remove(); // 自分（ボタン）を含むリスト項目を削除
    });

    // 4. li の中に 削除ボタン を入れる
    newItem.appendChild(deleteButton);

    // --- ここまで ---

    // 5. 完成した li をリストに追加
    list.appendChild(newItem);

    input.value = '';
});