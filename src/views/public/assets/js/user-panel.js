const editProject = e => {
  const inputId = document.querySelector('#inputEditProjectId');
  const inputTitle = document.querySelector('#inputEditProjectTitle');
  const inputStatus = document.querySelector('#inputEditProjectStatus');
  const inputDescription = document.querySelector(
    '#inputEditProjectDescription'
  );

  const row = e.parentNode.parentNode;
  const projectId = row.dataset.id;
  const projectTitle = row.querySelector('._title').textContent;
  const projectStatus = row.querySelector('._status').textContent;
  const projectDescription = row.querySelector('._description').textContent;

  inputId.value = projectId;
  inputTitle.value = projectTitle;
  inputStatus.value = projectStatus;
  inputDescription.value = projectDescription;
  document.querySelector('#inputMode').value = 'edit';
};

const deleteProject = () => {
  console.log('hello delete');
};

const clearInputs = () => {
  document.querySelector('#inputMode').value = 'add';
  document.querySelector('#inputEditProjectId').value = '';
  document.querySelector('#inputEditProjectTitle').value = '';
  document.querySelector('#inputEditProjectStatus').value = '';
  document.querySelector('#inputEditProjectDescription').value = '';
};

const btnSaveClick = e => {
  const modalBody = e.parentNode.parentNode.querySelector('.modal-body');
  const mode = modalBody.querySelector('#inputMode').value;

  const btnClose = document.querySelector('#btnClose');
  const inputId = document.querySelector('#inputEditProjectId');
  const inputTitle = document.querySelector('#inputEditProjectTitle');
  const inputStatus = document.querySelector('#inputEditProjectStatus');
  const inputDescription = document.querySelector(
    '#inputEditProjectDescription'
  );

  if (mode === 'add') {
    const body = {
      title: inputTitle.value,
      status: inputStatus.value,
      description: inputDescription.value
    };

    $.post('/add-project', body, data => {
      btnClose.click();
      location.reload();
    });
  }

  if (mode === 'edit') {
    const body = {
      id: inputId.value,
      title: inputTitle.value,
      status: inputStatus.value,
      description: inputDescription.value
    };
    
    $.post('/edit-project', body, data => {
      btnClose.click();
      location.reload();
    });
  }
};
