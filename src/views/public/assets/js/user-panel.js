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
};

const deleteProject = () => {
  console.log('hello delete');
};

const clearInputs = () => {
  document.querySelector('#inputEditProjectId').value = '';
  document.querySelector('#inputEditProjectTitle').value = '';
  document.querySelector('#inputEditProjectStatus').value = '';
  document.querySelector('#inputEditProjectDescription').value = '';
};
