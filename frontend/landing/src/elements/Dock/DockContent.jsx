/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import '@styles/dock.scss';
import { Link } from 'react-router-dom';

import FinderIcon from '@static/finder.png';
import ItermIcon from '@static/iterm2.png';
import CodeIcon from '@static/code.png';
import GithubIcon from '@static/github.png';
import FolderIcon from '@static/folder.png';
import LinkedInIcon from '@static/LinkedInIcon.png';
import DevopsIcon from '@static/DevopsIcon.png';
import mIcon from '@static/mIcon.jpg';
import SafariIcon from '@static/safari.png';
// import MyResume from "../Resume/resume/MyResume.pdf"

const DockContent = () => {
	return (
		<div className='main-contain'>
			<div className='container'>
				<div className='dock'>
					<span></span>
					<div className='dock-nav'>
						<ul>
							<Link to='/'>
								<li
									data-title='Finder'
									className='full-width-icon'
								>
									<img
										src={FinderIcon}
										className='img-fluid'
										alt='mac'
									/>
								</li>
							</Link>
							<Link to={'/safari'}>
								<li
									data-title='Safari'
									className={'full-width-icon'}
								>
									<img
										src={SafariIcon}
										className='img-fluid'
										alt='Safari'
									/>
								</li>
							</Link>
							<Link to='/terminal'>
								<li
									data-title='iTerm'
									className='full-width-icon'
								>
									<img
										src={ItermIcon}
										className='img-fluid'
										alt='iterm'
									/>
								</li>
							</Link>
							<Link to='/vscode'>
								<li data-title='VS Code'>
									<img
										src={CodeIcon}
										className='img-fluid'
										alt='vscode'
									/>
								</li>
							</Link>
							<Link to='/git'>
								<li data-title='Git Log'>
									<img
										src={GithubIcon}
										className='img-fluid'
										alt='github'
									/>
								</li>
							</Link>
							<Link to={'/linkedin'}>
								<li data-title='LinkedIn'>
									<img
										src={LinkedInIcon}
										className='img-fluid'
										alt='linkedin'
									/>
								</li>
							</Link>
							<a href='https://kr.linkedin.com/in/seongho-park-psh44034607?trk=profile-badge'>
								<li data-title='LinkedIn'>
									<img
										src={LinkedInIcon}
										className='img-fluid'
										alt='linkedin'
									/>
								</li>
							</a>
							<a
								href='@elements/Dock/DockContent'
								target='_blank'
							>
								<li data-title='Minimal Info'>
									<img
										src={mIcon}
										className='img-fluid'
										alt='mac'
									/>
								</li>
							</a>
							{/*<a*/}
							{/*	href='https://thisdoesnothing.vercel.app/'*/}
							{/*	target='_blank'*/}
							{/*>*/}
							{/*	<li data-title='This Does Nothing'>*/}
							{/*		<img*/}
							{/*			src={NothingIcon}*/}
							{/*			className='img-fluid'*/}
							{/*			alt='mac'*/}
							{/*		/>*/}
							{/*	</li>*/}
							{/*</a>*/}
							<a
								href='https://github.com/psh4607'
								target='_blank'
							>
								<li data-title='My DevOps Portal'>
									<img
										src={DevopsIcon}
										className='img-fluid'
										alt='mac'
									/>
								</li>
							</a>
							<div className='separator' />
							<a>
								<Link to='/resume'>
									<li data-title='Resume'>
										<img
											src={FolderIcon}
											className='img-fluid'
											alt='mac'
										/>
									</li>
								</Link>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DockContent;
