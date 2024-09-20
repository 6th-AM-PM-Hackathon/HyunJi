const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');
const infoContainer = document.getElementById('info');

editButton.addEventListener('click', () => {
    // 정보를 수정할 수 있도록 표시
    const infoElements = infoContainer.querySelectorAll('.info span');
    infoElements.forEach(span => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        span.textContent = ''; // 기존 텍스트 제거
        span.appendChild(input);
    });
    
    // 버튼 전환
    editButton.style.display = 'none';
    saveButton.style.display = 'inline-block';
});

saveButton.addEventListener('click', () => {
    // 수정된 정보를 저장
    const infoElements = infoContainer.querySelectorAll('.info span input');
    infoElements.forEach((input, index) => {
        const displaySpan = infoContainer.querySelectorAll('.info span')[index];
        displaySpan.textContent = input.value; // 입력값으로 변경
    });

    // 버튼 전환
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
});
