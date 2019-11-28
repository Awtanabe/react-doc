

- 進捗

https://reactjs.org/docs/forms.html#controlled-components

- jsx

- createElement 



  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello hello'
  )

  - React Only Updates What’s Necessary

  必要なものだけ更新される

  - ライフサイクル

  componentDidMount() 

  The componentDidMount() method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

  - Handle Event

  onClick

  メソッドは()いらない

  メソッドは、this.メソッド()

  stateの判定は !をつける

   hello(){
     this.setState({
       isOn: !this.state.isOn
     })
   }

   - Conditional Rendering

     - if を使う

     - ロジックを描く場合は{}

     - 三項演算子
    {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}

     - Preventing Component from Rendering
       return if

  - Lists and Keys
    - constつけないと undefaineとなる

    https://reactjs.org/docs/lists-and-keys.html#keys

  - Form

    - Controlled Components

      - onCubmit
      - onChange

      - defaultValue