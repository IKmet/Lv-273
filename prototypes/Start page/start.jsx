var Nav = React.createClass({
  render: function() {
    return (
       <nav>
		
		<li><a href="#" id = "logo"> <img src="logo.jpeg" alt="EPA"> </a></li>
        <ul>
			<li><a href="#">�� <br/>�����������</a></li>
			<li><a href="#">��������������� <br />����</a></li>
			<li><a href="#">�������<br/> ����������</a></li>
		</ul> 
		<a href="#" id = "reg">���������</a>

		</nav>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
       <main>
		<section>
			<h1>
				���� ������� �������� �� ���� ������������. ������� ��������������� ����, �������
				���������� � ��������� ����������� �����.
			</h1>
		</section>
		<section>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</section>
		<section id = "top">
			<h3>��� 5 �����������</h3>
			<div id = "s">
			<ul>
				  <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
				  <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
				  <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
				  <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
				  <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
			</ul>
			</div>
			<hr />
		</section>
		<section>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
			</p>
		</section>
   </main>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
       <footer>
	<p>Cotyright</p>
   </footer>
    );
  }
});

var Body = React.createClass({
  render: function() {
    return (
        <Nav />
        <Main />
		<Footer />
    );
  }
});

ReactDOM.render(
  <Body />,
  document.getElementById('content')
);

