// 確認用
console.log('jquery-test.jsを読み込みました。');
function test() {
    // 表示・非表示切り替え
    $('#kenri').toggle();
}


    // 写真の拡大
    $('#photo').on('click', function(){
        console.log('クリックされました。2');
        $('#photo').animate(
            {
            width: '300px',
            height: '400px'
        
            }
        )
    });

    $('#photo2').on('click', function(){
        console.log('クリックされました。');
        $('#photo2').animate(
            {
            width: '1000px'
        
            }
        )
    });
