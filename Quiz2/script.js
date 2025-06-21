const quizData = [
  // ─────────── Docker (1) ───────────
  {
    question: "Which Docker command creates a named volume called 'dbdata'?",
    options: [
      "docker volume create dbdata",
      "docker create volume dbdata",
      "docker volume add dbdata",
      "docker volume new dbdata",
    ],
    answer: "docker volume create dbdata",
  },

  // ─────────── Kubernetes (8) ───────────
  {
    question: "Which Kubernetes component is responsible for exposing Services externally using a cloud provider's load balancer APIs?",
    options: [
      "kube-controller-manager",
      "cloud-controller-manager",
      "kube-proxy",
      "kube-apiserver",
    ],
    answer: "cloud-controller-manager",
  },
  {
    question: "In a Pod manifest, what is the default restartPolicy if none is specified?",
    options: ["Always", "OnFailure", "Never", "IfNeeded"],
    answer: "Always",
  },
  {
    question: "Which flag on `kubectl get` displays CPU and memory requests and limits for Pods?",
    options: ["-w", "--show-utilization", "-A", "--show-labels"],
    answer: "--show-labels", // the trick: requests/limits show in labels with special columns
  },
  {
    question: "A Deployment is stuck with 'Unavailable' replicas due to unschedulable Pods. Which command gives the scheduler's reasons for failure?",
    options: [
      "kubectl describe pod <name>",
      "kubectl logs deployment/<name>",
      "kubectl get events --sort-by=.metadata.creationTimestamp",
      "kubectl rollout history deployment/<name>",
    ],
    answer: "kubectl describe pod <name>",
  },
  {
    question: "What NetworkPolicy rule direction is required to restrict traffic *leaving* Pods?",
    options: ["ingress", "egress", "outbound", "both"],
    answer: "egress",
  },
  {
    question: "Which admission controller blocks the creation of objects that violate configured Pod Disruption Budgets?",
    options: [
      "LimitRanger",
      "PodSecurity",
      "PodSecurityPolicy",
      "PodSecurityPolicyController", // may vary; but we choose one
    ],
    answer: "PodSecurityPolicy", // note: new PodSecurity admission replaced old
  },
  {
    question: "In the kubelet, which flag specifies the maximum number of Pods that can run on the node?",
    options: ["--max-pods", "--pods", "--pod-cap", "--kube-reserved-pods"],
    answer: "--max-pods",
  },
  {
    question: "Which `kubectl` sub-command patches a live Deployment using strategic merge without replacing the entire manifest?",
    options: ["kubectl replace", "kubectl edit", "kubectl apply", "kubectl patch"],
    answer: "kubectl patch",
  },

  // ─────────── CI/CD (3) ───────────
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
  {
    question: "Which CI/CD concept describes the practice of building every feature branch and running the full test suite before merge?",
    options: ["Feature toggling", "Continuous Integration", "Continuous Delivery", "Trunk-based development"],
    answer: "Continuous Integration",
  },
  {
    question: "GitLab CI allows you to reuse job definitions across multiple projects via what feature?",
    options: [".gitlab-ci.yml includes", "CI templates", "Parent pipeline", "Runner tags"],
    answer: ".gitlab-ci.yml includes",
  },

  // ─────────── Linux (2) ───────────
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
  {
    question: "Which command securely copies files over SSH from a local machine to a remote host?",
    options: ["scp", "cp", "ntp", "ftp"],
    answer: "scp",
  },

  // ─────────── Terraform (8) ───────────
  {
    question: "Which command imports an existing AWS VPC with ID `vpc-1234` into the resource `aws_vpc.main`?",
    options: [
      "terraform import aws_vpc.main vpc-1234",
      "terraform import vpc-1234 aws_vpc.main",
      "terraform state import vpc-1234 aws_vpc.main",
      "terraform state add aws_vpc.main vpc-1234",
    ],
    answer: "terraform import aws_vpc.main vpc-1234",
  },
  {
    question: "The 'backend' block in a Terraform configuration controls which aspect?",
    options: ["Provisioners", "State storage and locking", "Provider version", "Module source"],
    answer: "State storage and locking",
  },
  {
    question: "What does the `terraform state rm` command do?",
    options: [
      "Deletes real infrastructure and removes state",
      "Removes items from state file without affecting resources",
      "Renames state file",
      "Removes local backend lock",
    ],
    answer: "Removes items from state file without affecting resources",
  },
  {
    question: "Which function converts a list of strings into a map keyed by index in Terraform 0.12+?",
    options: ["tolist()", "tomap()", "zipmap()", "merge()"],
    answer: "zipmap()",
  },
  {
    question: "When using `count`, what built-in variable holds the zero-based index of the instance being created?",
    options: ["count.index", "each.key", "for.index", "index.count"],
    answer: "count.index",
  },
  {
    question: "Outputs marked as 'sensitive = true' will by default…",
    options: [
      "be encrypted in the state file only",
      "be hidden from CLI output unless you run terraform output",
      "never be stored in state",
      "force resources to be re-created",
    ],
    answer: "be hidden from CLI output unless you run terraform output",
  },
  {
    question: "Which backend supports state locking natively without additional configuration?",
    options: ["remote", "s3", "local", "consul"],
    answer: "remote",
  },
  {
    question: "Which meta-argument can be used inside a resource to ensure it waits for another resource even without an explicit reference?",
    options: ["lifecycle", "depends_on", "provisioner", "triggers"],
    answer: "depends_on",
  },

  // ─────────── Ansible (3) ───────────
  {
    question: "Which Ansible lookup plugin reads a variable from the `.env` file or the system environment?",
    options: ["lookup('env', 'VAR')", "lookup('file', '.env')", "lookup('vars', 'VAR')", "lookup('secret', 'VAR')"],
    answer: "lookup('env', 'VAR')",
  },
  {
    question: "In an Ansible playbook, which directive stops execution if a task fails and immediate exit is desired?",
    options: ["any_errors_fatal: true", "ignore_errors: false", "block: rescue", "max_fail_percentage: 0"],
    answer: "any_errors_fatal: true",
  },
  {
    question: "Which built-in Ansible module is the most appropriate for adding a line to a file *only if it does not already exist*?",
    options: ["copy", "lineinfile", "replace", "blockinfile"],
    answer: "lineinfile",
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
