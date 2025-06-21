const quizData = [
  // Terraform — init
  {
    question: "Which command is used to initialize a Terraform working directory containing configuration files?",
    options: ["terraform apply", "terraform init", "terraform plan", "terraform validate"],
    answer: "terraform init",
  },
  // Kubernetes — data store
  {
    question: "Where is the Kubernetes cluster-state data stored by default?",
    options: ["kube-apiserver", "etcd", "kubelet", "containerd"],
    answer: "etcd",
  },
  // Docker — list containers
  {
    question: "Which Docker command lists all containers, including stopped ones?",
    options: ["docker ps", "docker ps -a", "docker container ls", "docker images"],
    answer: "docker ps -a",
  },
  // CI/CD — staging purpose
  {
    question: "What is the main purpose of a staging environment in a CI/CD pipeline?",
    options: [
      "Run unit tests",
      "Perform blue/green deployments",
      "Mirror production to validate releases before prod",
      "Store build artifacts",
    ],
    answer: "Mirror production to validate releases before prod",
  },
  // Linux — recursive chown
  {
    question: "Which command recursively changes the owner of '/var/www/html' to user 'www-data'?",
    options: [
      "chown www-data /var/www/html",
      "chown -R www-data:www-data /var/www/html",
      "chmod -R 775 /var/www/html",
      "usermod -o www-data /var/www/html",
    ],
    answer: "chown -R www-data:www-data /var/www/html",
  },
  // Terraform — backend
  {
    question: "The 'backend' block in a Terraform configuration controls which aspect?",
    options: ["Provisioners", "State storage and locking", "Provider version", "Module source"],
    answer: "State storage and locking",
  },
  // Ansible — default config file  (replacement)
  {
    question: "Which file contains the global default configuration for Ansible on most Linux systems?",
    options: [
      "/etc/ansible/ansible.cfg",
      "/etc/ansible/hosts",
      "~/.ansible.cfg",
      "/usr/local/etc/ansible/config",
    ],
    answer: "/etc/ansible/ansible.cfg",
  },
  // Kubernetes — previous logs  (replacement)
  {
    question: "Which flag to 'kubectl logs' lets you view logs from the previous container instance after a restart?",
    options: ["-f", "--since=1h", "--previous", "--tail=-1"],
    answer: "--previous",
  },
  // Terraform — taint
  {
    question: "What happens when you run 'terraform taint aws_instance.web'?",
    options: [
      "The resource is deleted immediately",
      "The resource is marked to be destroyed and recreated on the next apply",
      "The state file is locked",
      "A plan is shown with no state changes",
    ],
    answer: "The resource is marked to be destroyed and recreated on the next apply",
  },
  // Kubernetes — controller manager
  {
    question: "Which Kubernetes component maintains the desired state of cluster objects by running control loops?",
    options: ["kubelet", "kube-proxy", "kube-controller-manager", "kube-scheduler"],
    answer: "kube-controller-manager",
  },
  // CI/CD — continuous delivery
  {
    question: "Which CI/CD practice deploys every change to a production-like environment and awaits manual approval before going live?",
    options: ["Continuous Integration", "Continuous Delivery", "Continuous Deployment", "GitOps"],
    answer: "Continuous Delivery",
  },
  // Ansible — ad-hoc ping
  {
    question: "Which Ansible command runs an ad-hoc module to ping all hosts in the 'web' group?",
    options: [
      "ansible web -m ping",
      "ansible-playbook web.yml --ping",
      "ansible web -a ping",
      "ansible-playbook -i web ping.yml",
    ],
    answer: "ansible web -m ping",
  },
  // Kubernetes — Service exposure
  {
    question: "Which Kubernetes object persistently exposes an application at a static external IP?",
    options: ["Service of type LoadBalancer", "Ingress", "Endpoint", "ConfigMap"],
    answer: "Service of type LoadBalancer",
  },
  // Linux — follow service logs  (replacement)
  {
    question: "Which command follows the systemd journal for the service 'nginx' in real time?",
    options: [
      "journalctl -u nginx.service -f",
      "systemctl tail nginx",
      "journalctl nginx.service --follow",
      "systemctl logs -f nginx.service",
    ],
    answer: "journalctl -u nginx.service -f",
  },
  // Terraform — fmt
  {
    question: "What is the purpose of the 'terraform fmt' command?",
    options: [
      "Show an execution plan",
      "Format configuration files to canonical style",
      "Remove unused state entries",
      "Import existing resources",
    ],
    answer: "Format configuration files to canonical style",
  },
  // Kubernetes — describe pod
  {
    question: "Which command shows detailed information, including recent events, for the Pod 'nginx' in the 'prod' namespace?",
    options: [
      "kubectl describe pod nginx -n prod",
      "kubectl logs nginx -n prod",
      "kubectl get pod nginx -n prod -o yaml",
      "kubectl events pod nginx -n prod",
    ],
    answer: "kubectl describe pod nginx -n prod",
  },
  // Terraform — module output
  {
    question: "Given a module named 'db', how do you reference its output variable 'endpoint' from the root module?",
    options: ["module.db.endpoint", "var.db.endpoint", "output.db.endpoint", "data.db.endpoint"],
    answer: "module.db.endpoint",
  },
  // CI/CD — GitHub workflow location
  {
    question: "In GitHub Actions, where are workflow definition files stored?",
    options: [".github/workflows", ".gitlab-ci.yml", "Jenkinsfile", ".circleci/config.yml"],
    answer: ".github/workflows",
  },
  // Ansible — host vs. group precedence  (replacement)
  {
    question: "If a variable is defined in both host_vars/ and group_vars/, which value does Ansible use?",
    options: [
      "host_vars value",
      "group_vars value",
      "role defaults value",
      "play vars value",
    ],
    answer: "host_vars value",
  },
  // Kubernetes — drain node
  {
    question: "When upgrading a cluster, which command safely drains node 'worker1'?",
    options: [
      "kubectl drain worker1 --ignore-daemonsets --delete-emptydir-data",
      "kubectl delete node worker1",
      "kubectl cordon worker1",
      "kubectl stop node worker1",
    ],
    answer: "kubectl drain worker1 --ignore-daemonsets --delete-emptydir-data",
  },
  // Terraform — for_each / count
  {
    question: "Which Terraform feature lets you create multiple similar resources without duplicating code?",
    options: ["Dynamic blocks", "for_each and count", "Variables", "Providers"],
    answer: "for_each and count",
  },
  // Kubernetes — kubelet register flag
  {
    question: "Which kubelet flag enables automatic node registration with the API server?",
    options: ["--register-node=true", "--enable-server", "--register-with-api", "--join"],
    answer: "--register-node=true",
  },
  // Kubernetes — replicas field
  {
    question: "In a Deployment manifest, which field specifies the number of pod replicas?",
    options: ["spec.replicas", "spec.strategy", "metadata.name", "spec.template"],
    answer: "spec.replicas",
  },
  // Terraform — destroy plan  (replacement)
  {
    question: "Which command shows a destroy plan in Terraform without actually changing any resources?",
    options: [
      "terraform plan -destroy",
      "terraform destroy -target",
      "terraform graph destroy",
      "terraform show -no-color",
    ],
    answer: "terraform plan -destroy",
  },
  // Terraform — workspaces  (new extra Terraform Q to reach 25)
  {
    question: "Which command creates a new Terraform workspace named 'dev'?",
    options: [
      "terraform workspace new dev",
      "terraform workspace create dev",
      "terraform workspace add dev",
      "terraform new dev",
    ],
    answer: "terraform workspace new dev",
  },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");
const retryButton = document.getElementById("retry");
const showAnswerButton = document.getElementById("showAnswer");

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.innerHTML = `${currentQuestion + 1}.${questionData.question}`;

  const optionsElement = document.createElement("div");
  optionsElement.className = "options";

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement("label");
    option.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "inline-block";
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = "block";
  submitButton.style.display = "inline-block";
  retryButton.style.display = "none";
  showAnswerButton.style.display = "none";
  resultContainer.innerHTML = "";
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "none";

  let incorrectAnswersHtml = "";
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
  }

  resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
}

submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);

displayQuestion();
