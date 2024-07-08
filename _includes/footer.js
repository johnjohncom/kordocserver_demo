document.addEventListener('DOMContentLoaded', (event) => {
    // 마지막 수정 날짜를 가져옵니다.
    var lastModifiedDate = document.lastModified;
    var date = new Date(lastModifiedDate).toLocaleDateString();
    // 페이지 내의 모든 내용을 검색하여 $LAST_MODIFIED_DATE$를 찾고 대체합니다.
    document.getElementById('footer').innerHTML = document.getElementById('footer').innerHTML.replace(/\$LAST_MODIFIED_DATE\$/g, date);
    
});