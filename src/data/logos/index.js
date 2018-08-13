import angular from '../../images/tools/ui/angular.png'
import react from '../../images/tools/ui/react.svg'
import redux from '../../images/tools/ui/redux.png'
import vue from '../../images/tools/ui/vue.png'
import backbone from '../../images/tools/ui/backbone.png'

import bootstrap from '../../images/tools/css/bootstrap.png'
import materialui from '../../images/tools/css/materialui.png'
import scss from '../../images/tools/css/scss.png'

import chai from '../../images/tools/test/chai.png'
import enzyme from '../../images/tools/test/enzyme.png'
import jest from '../../images/tools/test/jest.png'
import mocha from '../../images/tools/test/mocha.svg'
import sinon from '../../images/tools/test/sinon.png'

import firebaseLong from '../../images/tools/backend/firebase-long.png'
import nodeLong from '../../images/tools/backend/node-long.png'

import firebaseDbLong from '../../images/tools/db/firebase-db-long.png'
import mongoDbLong from '../../images/tools/db/mongodb-long.svg'
import mysql from '../../images/tools/db/mysql.png'
import robomongo from '../../images/tools/db/robomongo.png'

import bugzilla from '../../images/tools/issue-tracking/bugzilla.png'
import jira from '../../images/tools/issue-tracking/jira.png'
import trello from '../../images/tools/issue-tracking/trello.png'

import balsamiq from '../../images/tools/mockups/balsamiq.png'
import illustrator from '../../images/tools/mockups/illustrator.png'
import moqups from '../../images/tools/mockups/moqups.webp'
import photoshop from '../../images/tools/mockups/photoshop.png'

import yarn from '../../images/tools/package-managers/yarn.png'
import npm from '../../images/tools/package-managers/npm.png'

import git from '../../images/tools/revision/git.png'
import githubDesktop from '../../images/tools/revision/github-desktop.png'
import sourcetree from '../../images/tools/revision/sourcetree.png'

import knockout from '../../images/tools/utils/knockoutjs.png'
import lodash from '../../images/tools/utils/lodash.png'

import chromeDev from '../../images/tools/debugger/chrome-dev.png'
import firebug from '../../images/tools/debugger/firebug.png'

import vscode from '../../images/tools/editors/vscode.png'
import atom from '../../images/tools/editors/atom.png'
import sublime from '../../images/tools/editors/sublime.png'

import android from '../../images/tools/misc/android.png'
import androidStudioLong from '../../images/tools/misc/android-studio-long.jpg'
import apple from '../../images/tools/misc/apple.gif'
import electron from '../../images/tools/misc/electron.svg'
import expo from '../../images/tools/misc/expo.png'
import nativeBase from '../../images/tools/misc/native-base.webp'
import postman from '../../images/tools/misc/postman.png'
import reactNativeLong from '../../images/tools/misc/react-native-long.png'
import windows from '../../images/tools/misc/windows.png'
import xcode from '../../images/tools/misc/xcode.png'


const logoMaster = [
  // ui
  {
    name: 'angular',
    title: 'angular',
    logo: `${angular}`,
    type: 'ui'
  },
  {
    name: 'react',
    title: 'react',
    logo: `${react}`,
    type: 'ui'
  },
  {
    name: 'redux',
    title: 'redux',
    logo: `${redux}`,
    type: 'ui'
  },
  {
    name: 'vue',
    title: 'vue',
    logo: `${vue}`,
    type: 'ui'
  },
  {
    name: 'backbone',
    title: 'backbone',
    logo: `${backbone}`,
    type: 'ui'
  },
  // css
  {
    name: 'bootstrap',
    title: 'bootstrap',
    logo: `${bootstrap}`,
    type: 'css'
  },
  {
    name: 'materialui',
    title: 'materialui',
    logo: `${materialui}`,
    type: 'css'
  },
  {
    name: 'scss',
    title: 'scss',
    logo: `${scss}`,
    type: 'css'
  },
  // tests
  {
    name: 'chai',
    title: 'chai',
    logo: `${chai}`,
    type: 'tests'
  },
  {
    name: 'enzyme',
    title: 'enzyme',
    logo: `${enzyme}`,
    type: 'tests'
  },
  {
    name: 'jest',
    title: 'jest',
    logo: `${jest}`,
    type: 'tests'
  },
  {
    name: 'mocha',
    title: 'mocha',
    logo: `${mocha}`,
    type: 'tests'
  },
  {
    name: 'sinon',
    title: 'sinon',
    logo: `${sinon}`,
    type: 'tests'
  },
  // backend
  {
    name: 'firebaseLong',
    title: 'firebaseLong',
    logo: `${firebaseLong}`,
    long: true,
    type: 'backend'
  },
  {
    name: 'nodeLong',
    title: 'nodeLong',
    logo: `${nodeLong}`,
    long: true,
    type: 'backend'
  },
  // db
  {
    name: 'firebaseDbLong',
    title: 'firebaseDbLong',
    logo: `${firebaseDbLong}`,
    long: true,
    type: 'db'
  },
  {
    name: 'mongoDbLong',
    title: 'mongoDbLong',
    logo: `${mongoDbLong}`,
    long: true,
    type: 'db'
  },
  {
    name: 'mysql',
    title: 'mysql',
    logo: `${mysql}`,
    long: true,
    type: 'db'
  },
  {
    name: 'robomongo',
    title: 'robomongo',
    logo: `${robomongo}`,
    type: 'db'
  },
  // issue
  {
    name: 'bugzilla',
    title: 'bugzilla',
    logo: `${bugzilla}`,
    type: 'issue'
  },
  {
    name: 'jira',
    title: 'jira',
    logo: `${jira}`,
    type: 'issue'
  },
  {
    name: 'trello',
    title: 'trello',
    logo: `${trello}`,
    type: 'issue'
  },
  // mockups
  {
    name: 'balsamiq',
    title: 'balsamiq',
    logo: `${balsamiq}`,
    type: 'mockups'
  },
  {
    name: 'illustrator',
    title: 'illustrator',
    logo: `${illustrator}`,
    type: 'mockups'
  },
  {
    name: 'moqups',
    title: 'moqups',
    logo: `${moqups}`,
    type: 'mockups'
  },
  {
    name: 'photoshop',
    title: 'photoshop',
    logo: `${photoshop}`,
    type: 'mockups'
  },
  // packageManager
  {
    name: 'yarn',
    title: 'yarn',
    logo: `${yarn}`,
    type: 'packageManager'
  },
  {
    name: 'npm',
    title: 'npm',
    logo: `${npm}`,
    type: 'packageManager'
  },
  // codeRevision
  {
    name: 'git',
    title: 'git',
    logo: `${git}`,
    type: 'codeRevision'
  },
  {
    name: 'githubDesktop',
    title: 'githubDesktop',
    logo: `${githubDesktop}`,
    type: 'codeRevision'
  },
  {
    name: 'sourcetree',
    title: 'sourcetree',
    logo: `${sourcetree}`,
    type: 'codeRevision'
  },
  // utils
  {
    name: 'knockout',
    title: 'knockout',
    logo: `${knockout}`,
    long: true,
    type: 'utils'
  },
  {
    name: 'lodash',
    title: 'lodash',
    logo: `${lodash}`,
    type: 'utils'
  },
  // debugger
  {
    name: 'chromeDev',
    title: 'chromeDev',
    logo: `${chromeDev}`,
    type: 'debugger'
  },
  {
    name: 'firebug',
    title: 'firebug',
    logo: `${firebug}`,
    type: 'debugger'
  },
  // editors
  {
    name: 'vscode',
    title: 'vscode',
    logo: `${vscode}`,
    type: 'editors'
  },
  {
    name: 'atom',
    title: 'atom',
    logo: `${atom}`,
    type: 'editors'
  },
  {
    name: 'sublime',
    title: 'sublime',
    logo: `${sublime}`,
    type: 'editors'
  },
  // misc
  {
    name: 'android',
    title: 'android',
    logo: `${android}`,
    type: 'misc'
  },
  // {
  //   name: 'androidStudioLong',
  //   title: 'androidStudioLong',
  //   logo: `${androidStudioLong}`,
  //   long: true,
  //   type: 'misc'
  // },
  {
    name: 'apple',
    title: 'apple',
    logo: `${apple}`,
    type: 'misc'
  },
  {
    name: 'electron',
    title: 'electron',
    logo: `${electron}`,
    type: 'misc'
  },
  {
    name: 'expo',
    title: 'expo',
    logo: `${expo}`,
    type: 'misc'
  },
  {
    name: 'nativeBase',
    title: 'nativeBase',
    logo: `${nativeBase}`,
    type: 'misc'
  },
  {
    name: 'postman',
    title: 'postman',
    logo: `${postman}`,
    type: 'misc'
  },
  {
    name: 'reactNativeLong',
    title: 'reactNativeLong',
    logo: `${reactNativeLong}`,
    long: true,
    type: 'misc'
  },
  {
    name: 'windows',
    title: 'windows',
    logo: `${windows}`,
    type: 'misc'
  },
  {
    name: 'xcode',
    title: 'xcode',
    logo: `${xcode}`,
    type: 'misc'
  },
]

export default logoMaster
