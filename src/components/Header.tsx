import React, { Component, createRef } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom"; //eslint-disable-line
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";

import ExitIcon from "@/assets/svg/icons/exit.svg";
import SearchIcon from "@/assets/svg/icons/search.svg";
import UserIcon from "@/assets/svg/icons/user.svg";
import Logo from "@/components/header/Logo";
import Search from "@/components/header/Search";
import { actionCreators } from "@/store/base/index";
import { Nav } from "@/types/models.type";

type HeaderProps = WithTranslation & {
  nav: Array<Nav>;
};

type HeaderState = {
  mobileNavIsActive: boolean;
  searchIsActive: boolean;
  userIsActive: boolean;
  isScrolled: boolean;
};

class Header extends Component<HeaderProps, HeaderState> {
  public state: HeaderState = {
    mobileNavIsActive: false,
    searchIsActive: false,
    userIsActive: false,
    isScrolled: false,
  };

  private searchInput = createRef<HTMLInputElement>();

  public render() {
    const { t } = this.props;

    return (
      <header
        className={`header header--main ${
          this.state.searchIsActive ? "search-is-active" : ""
        } ${this.state.isScrolled ? "is-scrolled" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="header__nav-left col-4 d-lg-none">
              <span
                className={`mobile-menu ${
                  this.state.mobileNavIsActive ? "is-active" : ""
                }`}
                onClick={this.mobileNavToggle}
                aria-hidden="true"
              ></span>
            </div>
            <div className="header__logo col-4 col-lg-1">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div
              className={`header__nav col-lg-6 col-xl-7 ${
                this.state.mobileNavIsActive ? "is-active" : ""
              }
              ${this.state.searchIsActive ? "is-hidden" : ""}
              `}
            >
              {this.props.nav.length > 0 && (
                <nav className="nav nav--header">
                  <ul className="nav__list">
                    {this.props.nav.map((nav, i) => {
                      return (
                        <li className="nav__item" key={i}>
                          <Link className="nav__link" to={nav.url}>
                            {t(nav.name)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </div>
            <div
              className={`header__search col-lg-6 col-xl-7 ${
                this.state.searchIsActive ? "is-active" : ""
              }`}
            >
              <Search searchInput={this.searchInput} />
            </div>
            <div className="header__nav-right col-4 col-lg-5 col-xl-4">
              <nav className="nav nav--icons">
                <ul className="nav__list">
                  <li
                    className={`nav__item nav__item--search ${
                      this.state.searchIsActive ? "is-active" : ""
                    }`}
                    onClick={this.searchToggle}
                    aria-hidden="true"
                  >
                    <img
                      src={SearchIcon}
                      className="nav__icon nav__icon--search"
                      alt="Search"
                      title="Search"
                    />
                    <img
                      src={ExitIcon}
                      className="nav__icon nav__icon--exit"
                      alt="Exit"
                      title="Exit"
                    />
                  </li>
                  <li
                    className="nav__item"
                    onClick={this.openLoginModal}
                    aria-hidden="true"
                  >
                    <img src={UserIcon} alt="User" title="User" />
                    <span className="nav__title">{t("Login")}</span>
                  </li>
                  <div className="nav__item d-none d-lg-block">
                    <button
                      className="btn btn-primary"
                      onClick={this.openNewAdModal}
                    >
                      {t("New ad")}
                    </button>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }

  public mobileNavToggle = (): void => {
    if (!this.props.backdrop) this.props.backdropToggle(false);

    this.setState({ mobileNavIsActive: !this.state.mobileNavIsActive });
    this.setState({ searchIsActive: false });

    this.props.modalToggle({
      name: this.props.modal.name,
      toggle: false,
    });
  };

  public searchToggle = (): void => {
    this.setState({ searchIsActive: !this.state.searchIsActive });
    this.setState({ mobileNavIsActive: false });

    this.props.modalToggle({
      name: this.props.modal.name,
      toggle: false,
    });

    if (this.state.searchIsActive) this.props.backdropToggle(false);
    else this.props.backdropToggle(true);
  };

  public openLoginModal = (): void => {
    this.props.modalToggle({ name: "login", toggle: !this.props.modal.toggle });

    this.setState({ searchIsActive: false });
    this.setState({ mobileNavIsActive: false });

    if (this.props.modal.toggle) this.props.backdropToggle(false);
    else this.props.backdropToggle(true);
  };

  public openNewAdModal = (): void => {
    if (!this.props.backdrop) this.props.backdropToggle(!this.props.backdrop);
    this.props.modalToggle({
      name: "new-ad",
      toggle: !this.props.modal.toggle,
    });

    this.setState({ searchIsActive: false });
    this.setState({ mobileNavIsActive: false });
  };

  public isScrolled = (): void => {
    if (window.pageYOffset > 1) this.setState({ isScrolled: true });
    else this.setState({ isScrolled: false });
  };

  componentDidUpdate = (): void => {
    if (!this.props.backdrop) {
      if (this.state.searchIsActive) {
        this.setState({ searchIsActive: !this.state.searchIsActive });
      }

      if (this.props.modal.toggle) {
        this.props.modalToggle({
          name: this.props.modal.name,
          toggle: !this.props.modal.toggle,
        });
      }
    }
  };

  componentDidMount = (): void => {
    window.addEventListener("scroll", this.isScrolled);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.isScrolled);
  }
}

const mapStateToProps = (state: any) => {
  return {
    modal: state.modal,
    backdrop: state.backdrop,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(actionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Header));
