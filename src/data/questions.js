/**
 * Full LaTeX Questions Dataset
 * Contains 12 questions covering various LaTeX topics
 */

const questions = [
  {
    id: 1,
    title: "Two Dummy Paragraphs with Header/Footer",
    question: "Develop a LaTeX script to create a simple document that consists of 2 sections with dummy paragraphs, header, footer, and proper formatting.",
    answer: `\\documentclass[12pt,a4paper]{article}
\\usepackage[left=2cm,right=2cm,top=2cm,bottom=2cm]{geometry}
\\usepackage{fancyhdr}
\\title{latexproject}
\\author{User}
\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[R]{latexproject}
\\fancyfoot[L,C]{BrCE}
\\fancyfoot[R]{\\thepage}
\\begin{document}
\\maketitle
\\thispagestyle{fancy}
\\section{About BrCE}
Brindavan Group of Institutions, established 30+ years ago, is student-centric institutions with over 6600 enrolled students across various programs including Research, Undergraduate, Pre-University, Diploma, and Postgraduate studies. Our diverse offerings encompass professional disciplines such as Business, Engineering, Architecture, Commerce, Aviation, Journalism, and Industry-Oriented Skills.
\\subsection{PEO}
\\begin{itemize}
\\item PEO1
B.E. - Artificial Intelligence and Machine Learning
B.E. - Computer Science and Engineering
B.E. - CSE( IOT Cyber Security and Including Blockchain Technology)
B.E. - Civil Engineering
\\item PEO2
B.E. - Electronics and Communication Engineering
B.E. - Information Science and Engineering
B.E. - Mechanical Engineering
B.E. - Science and Humanities Department
\\end{itemize}
\\subsection{PSO}
\\begin{itemize}
\\item PSO1Master of Business Administration (MBA - VTU)
Master of Computer Applications (MCA - VTU)
M.Tech. - Structural Engineering
M.Tech. - Machine Design
\\item PSO2Master of Business Administration (MBA - VTU)
Master of Computer Applications (MCA - VTU)
M.Tech. - Structural Engineering
M.Tech. - Machine Design
\\end{itemize}
\\end{document}`
  },
  {
    id: 2,
    title: "Sample Abstract/Summary",
    question: "Develop a LaTeX script to create a document that displays the sample Abstract/Summary.",
    answer: `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{amsmath}
\\usepackage{amsfonts}
\\usepackage{amssymb}
\\usepackage[left=3cm,right=3cm,top=2cm,bottom=2cm]{geometry}
\\begin{document}
\\thispagestyle{plain}
\\begin{center}
\\large
\\textbf{COVID-19 and comobid}\\\\[0.9cm]
\\large
AI in Medical field\\\\[0.9cm]
\\textbf{Abstract}
\\end{center}
Coronavirus disease (COVID-19) is caused by severe acute respiratory syndrome-coronavirus-2 (SARS-CoV-2) which was identified in Wuhan, China in December 2019 and jeopardized human lives. It spreads at an unprecedented rate worldwide, with serious and still-unfolding health conditions and economic ramifications. Based on the clinical investigations, the severity of COVID-19 appears to be highly variable, ranging from mild to severe infections including the death of an infected individual.
\\\\
\\textbf{Keywords:} COVID-19, comorbidity, diabetes, cancer, Parkinson's disease, cardiovascular disease
\\\\
\\end{document}`
  },
  {
    id: 3,
    title: "Simple Title Page of VTU Project Report",
    question: "Develop a LaTeX script to create a simple title page of the VTU project Report [Use suitable Logos and text formatting].",
    answer: `\\documentclass{report}
\\usepackage{graphicx}
\\usepackage{geometry}
\\geometry{a4paper, margin=1in}
\\begin{document}
\\begin{titlepage}
\\begin{center}
\\textbf{\\huge Visvesvaraya Technological University}\\\\[0.5cm]
{\\normalsize Jnana Sangama, Belgaum-590018}\\\\[0.3cm]
\\includegraphics[width=0.2\\textwidth]{vtu-logo.png}\\\\[1.2cm]
\\textbf{\\Large Brindavan College of Engineering}\\\\[0.2cm]
{\\large Department of Computer Science and Engineering}\\\\[1.5cm]
{\\Huge \\textbf{COVID-19}}\\\\[1.5cm]
\\textbf{\\large A Project Report}\\\\[0.3cm]
Submitted by\\\\[0.2cm]
{\\Large Taniya Huda}\\\\[0.2cm]
{\\small 1BO24CS096}\\\\[1.2cm]
\\textbf{\\large Under the Guidance of}\\\\[0.2cm]
{\\Large Prof. Ashwini M}\\\\[0.1cm]
{\\large Asst. Professor, Dept. of CSE}\\\\[0.5cm]
{\\large Brindavan College of Engineering}\\\\[0.2cm]
{\\large Bengaluru-560001}\\\\[1.2cm]
{\\large 4th Semester, 2026}
\\end{center}
\\end{titlepage}
\\end{document}`
  },
  {
    id: 4,
    title: "Certificate Page",
    question: "Develop a LaTeX script to create the Certificate Page of the Report [Use suitable commands to leave the blank spaces for user entry].",
    answer: `\\documentclass[a4paper,12pt]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{tcolorbox}
\\usepackage{xcolor}
\\usepackage{setspace}
\\usepackage{graphicx}
\\pagestyle{empty}
\\begin{document}
\\noindent
\\begin{tcolorbox}[
 colframe=black,
 colback=white,
 boxrule=1.5pt,
 width=\\textwidth,
 arc=0pt,
 boxsep=8pt
]
\\begin{center}
{\\Large \\textbf{BRINDAVAN COLLEGE OF ENGINEERING}}\\\\[4pt]
{\\normalsize \\textbf{BENGALURU-560001}}\\\\[4pt]
{\\normalsize \\textbf{DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING}}
\\vspace{0.5cm}
\\includegraphics[width=0.18\\textwidth]{image.png}

\\vspace{0.5cm}
{\\large \\textbf{\\underline{CERTIFICATE}}}
\\end{center}
\\vspace{0.3cm}
\\setstretch{1.3}
\\noindent
This is to certify that \\textbf{\\textcolor{blue}{User}} has successfully submitted the Dissertation Phase 2 Report titled \\textbf{\\textcolor{blue}{"OntoCopy: Copyright Ontology on Indian Court Judgements for Case Summarisation"}} in partial fulfillment of the requirements for the award of the degree of \\textbf{Master of Technology in Computer Science and Engineering} under \\textbf{VTU} for the academic year \\textbf{2025--2026}.
\\vspace{0.3cm}
\\noindent
The dissertation report has been approved as it satisfies the academic requirements in respect of the work guidelines prescribed for the said degree.
\\vspace{1.2cm}
\\noindent
\\begin{minipage}{0.45\\textwidth}
\\centering
\\rule{5.5cm}{0.4pt}\\\\[2pt]
\\textbf{Prof. Ashwini M}\\\\[2pt]
Assistant Professor \\& Guide\\V[2pt]
Department of CSE\\V[2pt]
BrCE, Bengaluru
\\end{minipage}
\\hfill
\\begin{minipage}{0.45\\textwidth}
\\centering
\\rule{5.5cm}{0.4pt}\\\\[2pt]
\\textbf{Prof. J Bharathi}\\\\[2pt]
Professor \\& Head\\V[2pt]
Department of CSE\\V[2pt]
BrCE, Bengaluru
\\end{minipage}
\\vspace{1.5cm}
\\noindent
\\begin{minipage}{0.45\\textwidth}
\\centering
\\rule{5.5cm}{0.4pt}\\\\[2pt]
\\textbf{Examiner 1}
\\end{minipage}
\\hfill
\\begin{minipage}{0.45\\textwidth}
\\centering
\\rule{5.5cm}{0.4pt}\\\\[2pt]
\\textbf{Examiner 2}
\\end{minipage}
\\vspace{0.5cm}
\\end{tcolorbox}
\\end{document}`
},
  {
    id: 5,
    title: "Table with Student Details",
    question: "Develop a LaTeX script to create a document that contains the following table with proper labels.",
    answer: `\\documentclass[10pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{amsmath}
\\usepackage{amsfonts}
\\usepackage{amssymb}
\\usepackage[left=2cm,right=2cm,top=2cm,bottom=2cm]{geometry}
\\usepackage{multirow}
\\begin{document}
\\begin{center}
{\\Large \\textbf{Table: Students Details of 4th semester CSE}}
\\end{center}
\\section*{Marks Details}
\\begin{table}[h]
\\centering
\\begin{tabular}{|c|c|c|c|c|c|c|}
\\hline
\\multirow{2}{*}{S.No} & \\multirow{2}{*}{USN} & \\multirow{2}{*}{Student Name} & \\multicolumn{4}{c|}{Marks} \\\\
\\cline{4-7}
 & & & MATHS & ADA & Math & DBMS \\\\
\\hline
1 & 1BO24CS095 & sufi & 45 & 77 & 97 & 58 \\\\
\\hline
2 & 1BO24CS096 & Tani & 74 & 78 & 66 & 88 \\\\
\\hline
3 & 1BO24CS097 & Syda & 88 & 82 & 79 & 95 \\\\
\\hline
\\end{tabular}
\\end{table}
\\end{document}`
  },
  {
    id: 6,
    title: "Side-by-Side Graphs/Figures",
    question: "Develop a LaTeX script to include the side-by-side graphics/pictures/figures in the document by using the subgraph concept.",
    answer: `\\documentclass{article}
\\usepackage{graphicx}
\\usepackage{subcaption}
\\begin{document}
\\begin{center}
\\textbf{\\huge Side-by-Side Subgraph}
\\end{center}
\\begin{figure}[ht]
\\centering
\\begin{subfigure}{0.3\\textwidth}
\\centering
\\includegraphics[width=\\linewidth]{11.jpg}
\\caption{First Dataset Accuracy}
\\end{subfigure}
\\hfill
\\begin{subfigure}{0.3\\textwidth}
\\centering
\\includegraphics[width=\\linewidth]{12.png}
\\caption{Second Dataset Accuracy}
\\end{subfigure}
\\hfill
\\begin{subfigure}{0.3\\textwidth}
\\centering
\\includegraphics[width=\\linewidth]{13.jpg}
\\caption{Comparison}
\\end{subfigure}
\\caption{Performance Analysis}
\\end{figure}
\\end{document}`
  },
  {
    id: 7,
    title: "Two Mathematical Equations",
    question: "Develop a LaTeX script to create a document that consists of the following two mathematical equations.",
    answer: `\\documentclass{article}
\\usepackage{amsmath}
\\begin{document}
\\title{Following Two Mathematical Equations}
\\date{}
\\maketitle
\\begin{align}
X &= \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} \\notag \\\\
&= \\frac{-2 \\pm \\sqrt{2^2-4\\cdot 1 \\cdot (-8)}}{2 \\cdot 1} \\notag \\\\
&= \\frac{-2 \\pm \\sqrt{4+32}}{2} \\notag
\\end{align}
\\begin{align}
\\varphi_{\\sigma}^{\\lambda} A_{t} &= \\sum_{\\pi\\in C_{t}} \\operatorname{sgn}(\\pi) \\varphi_{\\sigma}^{\\lambda} \\varphi_{\\pi}^{\\lambda} \\notag \\\\
&= \\sum_{\\tau \\in C_{\\sigma t}} \\operatorname{sgn}(\\pi^{-1}\\tau\\sigma) \\varphi_{\\sigma}^{\\lambda} \\varphi_{\\pi^{-1} \\tau \\sigma}^{\\lambda} \\notag \\\\
&= A_{\\sigma t} \\varphi_{\\sigma}^{\\lambda} \\notag
\\end{align}
\\end{document}`
  },
  {
    id: 8,
    title: "Theorem, Corollaries, and Lemmas",
    question: "Develop a LaTeX script to demonstrate the presentation of Numbered theorems, definitions, corollaries, and lemmas in the document.",
    answer: `\\documentclass{article}
\\newtheorem{definition}{Definition}[section]
\\newtheorem{theorem}{Theorem}[section]
\\newtheorem{corollary}{Corollary}[theorem]
\\newtheorem{lemma}[theorem]{Lemma}
\\begin{document}
\\section{Introduction}
Theorems can easily be defined:
\\begin{definition}[Right Triangle]
In a right-angled triangle, the square of the hypotenuse side is equal to the sum of squares of the other two sides.
\\end{definition}
\\begin{theorem}[Pythagorean theorem]
\\label{pythagorean}
This is a theorem about right triangles and can be summarised in the next equation:
\\[ x^2 + y^2 = z^2 \\]
\\end{theorem}
And a consequence of theorem \\ref{pythagorean} is the statement in the next corollary.
\\begin{corollary}
There's no right rectangle whose sides measure 3cm, 4cm, and 6cm.
\\end{corollary}
You can reference theorems such as \\ref{pythagorean} when a label is assigned.
\\begin{lemma}
Triangles with the same base and height have the same area.
\\end{lemma}
\\end{document}`
  },
  {
    id: 9,
    title: "Document with 10+ Citations and References",
    question: "Develop a LaTeX script to create a document that consists of two paragraphs with a minimum of 10 citations in it and display the reference in the section.",
    answer: `\\documentclass{article}
\\usepackage[numbers]{natbib}
\\begin{document}
\\title{Document with Citations and References}
\\author{User}
\\date{}
\\maketitle
\\section{Emerging Powers in International Politics}
The 21st century is marked by an increased attention to the appeal and positive image of a country as instruments of influence in the international arena \\citep{bohomolov2012ghost}. There has appeared the concept of soft power, whose author, U.S. political scientist Joseph Nye described it as "the ability to get what you want through attraction rather than coercion or payments" \\citep{hill2006moscow}. A nation's image secures attractiveness and trust in a country, playing a crucial role as the key soft power component \\citep{kiseleva2015russia}. Therefore, the efforts of states along this line relate not so much to the sphere of culture and information as to geopolitics \\citep{kosachev2012specific, sergunin2015understanding}.
\\section{Atomic Force Microscopy in Microbiology}
Understanding the functions of microbial cell surfaces requires knowledge of their structural and physical properties \\citep{dufrene2002atomic}. Electron microscopy has long been recognized as a key technique in microbiology to elucidate cell surface ultrastructure \\citep{engel1999atomic}. An exciting achievement has been the development of cryotechniques which allow high-resolution imaging of cell structures in conditions close to the native state \\citep{franz2008atomic}. Yet direct observation in aqueous solution remained impossible. Because of the small size of microorganisms, the physical properties of their surfaces have been difficult to study \\citep{marrese2017atomic}. Quantitative and qualitative information on physical properties can be obtained by electron microscopy techniques, X-ray photoelectron spectroscopy, infrared spectroscopy, contact angle, and electrophoretic mobility measurements \\citep{altman2015noncontact}.
\\begin{thebibliography}{99}
\\bibitem{bohomolov2012ghost} Bohomolov O, Lytvynenko OV. A ghost in the mirror: Russian soft power in Ukraine. Chatham House London; 2012.
\\bibitem{sergunin2015understanding} Sergunin A, Karabeshkin L. Understanding Russia's soft power strategy. Politics. 2015;35(3-4):347-363.
\\bibitem{kiseleva2015russia} Kiseleva Y. Russia's soft power discourse: identity, status and the attraction of power. Politics. 2015;35(3-4):316-329.
\\bibitem{kosachev2012specific} Kosachev K. The specifics of Russian soft power. Russia in Global Affairs. 2012;7(3):1-11.
\\bibitem{hill2006moscow} Hill F. Moscow discovers soft power. Current History. 2006;105(693):341-347.
\\bibitem{dufrene2002atomic} Dufr\\^{e}ne YF. Atomic force microscopy, a powerful tool in microbiology. Journal of Bacteriology. 2002;184(19):5205-5213.
\\bibitem{engel1999atomic} Engel A, Lyubchenko Y, M\\"{u}ller D. Atomic force microscopy: a powerful tool to observe biomolecules at work. Trends in Cell Biology. 1999;9(2):77-80.
\\bibitem{franz2008atomic} Franz CM, Puech PH. Atomic force microscopy: a versatile tool for studying cell morphology, adhesion and mechanics. Cellular and Molecular Bioengineering. 2008;1:289-300.
\\bibitem{marrese2017atomic} Marrese M, Guarino V, Ambrosio L. Atomic force microscopy: a powerful tool to address scaffold design in tissue engineering. Journal of Functional Biomaterials. 2017;8(1):7.
\\bibitem{altman2015noncontact} Altman EI, Baykara MZ, Schwarz UD. Noncontact atomic force microscopy: an emerging tool for fundamental catalysis research. Accounts of Chemical Research. 2015;48(9):2640-2648.
\\end{thebibliography}
\\end{document}`
  },
  {
    id: 10,
    title: "Tree Diagram with TikZ Library",
    question: "Develop a LaTeX script to design a simple tree diagram or hierarchical structure in the document with appropriate labels using the Tikz library.",
    answer: `\\documentclass{article}
\\usepackage{tikz}
\\usetikzlibrary{trees}
\\begin{document}
\\title{Simple Tree Diagram using TikZ}
\\author{User}
\\date{}
\\maketitle
\\begin{center}
\\begin{tikzpicture}[
level 1/.style={sibling distance=7cm, level distance=3cm},
level 2/.style={sibling distance=3.5cm, level distance=2.5cm},
every node/.style={font=\\large, circle, draw, minimum size=1cm, inner sep=2pt}
]
\\node {Root}
child { node {Child 1}
child { node {Grandchild 1.1} }
child { node {Grandchild 1.2} }
}
child { node {Child 2}
child { node {Grandchild 2.1} }
child { node {Grandchild 2.2} }
};
\\end{tikzpicture}
\\end{center}
\\end{document}`
  },
  {
    id: 11,
    title: "Algorithm using Algorithm2e Library",
    question: "Develop a LaTeX script to present an algorithm in the document using algorithm/ algorithmic/ algorithm2e Library.",
    answer: `\\documentclass{article}
\\usepackage[ruled, linesnumbered]{algorithm2e}
\\begin{document}
\\title{Dijkstra's Algorithm}
\\author{User}
\\date{}
\\maketitle
\\begin{algorithm}[H]
\\SetAlgoLined
\\SetKwFunction{Dijkstra}{Dijkstra}
\\SetKwProg{Fn}{Function}{:}{}
\\Fn{\\Dijkstra{$G, s$}}{
$d[s] \\gets 0$\\;
\\ForEach{$v \\in V$}{
$d[v] \\gets \\infty$\\;
$prev[v] \\gets$ undefined\\;
}
$Q \\gets V$\\;
\\While{$Q$ is not empty}{
$u \\gets$ vertex in $Q$ with minimum $d[u]$\\;
Remove $u$ from $Q$\\;
\\ForEach{$v \\in$ neighbors of $u$}{
$alt \\gets d[u] + \\mathrm{weight}(u, v)$\\;
\\If{$alt < d[v]$}{
$d[v] \\gets alt$\\;
$prev[v] \\gets u$\\;
}
}
}
\\KwRet{$d[], prev[]$}\\;
}
\\caption{Dijkstra's Algorithm}
\\label{algo:dijkstra}
\\end{algorithm}
\\end{document}`
  },
  {
    id: 12,
    title: "Simple Report/Article with Chapters",
    question: "Develop a LaTeX script to create a simple report and article by using suitable commands and formats of user choice.",
    answer: `\\documentclass[a4paper, 12pt]{report}
\\usepackage{graphicx}
\\usepackage{ragged2e}
\\usepackage{xcolor}
\\begin{document}
\\title{Simple Report}
\\author{User}
\\date{\\today}
\\maketitle
\\tableofcontents
\\thispagestyle{empty}
\\chapter{Introduction}
\\pagenumbering{arabic}
\\setcounter{page}{1}
\\section{Context based Diversification}
The human era is evolved and dominated through the ultimate intention to know about the Universe and its assets more and more. This in turn persuaded him to gather the immense information of need in the form of theory, tools, intuitions, visuals, and ultimately as the form of abstract objects. Deciding the context of the search query based on its representation over a concept network using fuzzy methods provides a better thrust to the overall search process. The existing context based search diversification process emphasizes the importance of the numerical representation of the query over a data repository. The search operation can use these semantically meaningful segments as a confident segment in the conceptual network.
\\chapter{Literature Review}
Corresponding Literature works are discussed in this chapter.
\\chapter{Methodology}
Corresponding Methodology is explained in this chapter.
\\chapter{Performance Analysis}
Corresponding Performance analysis is presented in this chapter.
\\begin{figure}[htbp]
\\centering
\\includegraphics[scale=0.8]{CN}
\\caption{A portion of concept network for query "hotel California".}
\\label{fig}
\\end{figure}
\\chapter{Conclusion}
Corresponding Conclusion is presented in this chapter.
\\end{document}`
  }
];

export default questions;