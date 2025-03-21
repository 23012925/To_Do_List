let taskCount = 0;

        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;

            taskCount++;
            let li = document.createElement("li");
            let span = document.createElement("span");
            span.textContent = `${taskCount}. ${taskText}`;
            let button = document.createElement("button");
            button.textContent = "X";
            button.classList.add("remove-btn");
            button.onclick = function() { removeTask(this); };
            
            li.appendChild(span);
            li.appendChild(button);
            li.addEventListener("click", function(event) {
                if (event.target !== button) {
                    this.classList.toggle("completed");
                }
            });

            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }

        function removeTask(btn) {
            btn.parentElement.remove();
            updateTaskNumbers();
        }

        function updateTaskNumbers() {
            let tasks = document.querySelectorAll("#taskList li span");
            taskCount = 0;
            tasks.forEach((task) => {
                taskCount++;
                task.textContent = `${taskCount}. ${task.textContent.replace(/^\d+\. /, '')}`;
            });
        }