import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UploadPic from './UploadPic';
import { useAuth0 } from '@auth0/auth0-react';

const SneakerDetails = () => {
	const { _id } = useParams();
	const [item, setItem] = useState();
	const [newComment, setNewComment] = useState('');
	const [comment, setComment] = useState(false);
	const [existingComments, setExistingComments] = useState(null);
	const [uploadedImage, setUploadedImage] = useState('');
	const [isDeleted, setIsDeleted] = useState(false);
	const [isUpdate, setIsUpdate] = useState(false);
	const [commentToUpdate, setCommentToUpdate] = useState(0);
	const { user } = useAuth0();
	const [commmentCounter, setCommentCounter] = useState(0);
	const [updatedComment, setUpdatedComment] = useState('');
	const [refetch, setRefetch] = useState(false);

	// console.log(uploadedImage)

	// console.log("existingComments", existingComments);
	useEffect(() => {
		fetch(`/getSneaker/${_id}`)
			.then((res) => res.json())
			.then((data) => setItem(data.data))
			.catch((err) => console.log(err));
	}, [_id]);

	useEffect(() => {
		fetch(`/getAllComments/${_id}`)
			.then((res) => res.json())
			.then((data) => {
				setExistingComments(data.data);
				setCommentCounter(data.data.length);
			})

			.catch((err) => console.log(err));
	}, [_id, comment, isDeleted, refetch]);

	const handleCreateComment = (e) => {
		setCommentCounter(commmentCounter + 1);
		e.preventDefault();
		// console.log(newComment)
		fetch(`/createComment`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				newComment,
				_id,
				uploadedImage,
				user: user.email,
				counter: commmentCounter,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setComment(!comment);
				setNewComment('');
				setUploadedImage('');
			})
			.catch((err) => console.log(err));
	};
	const handleChange = (e) => {
		setNewComment(e.target.value);
	};

	const deleteComment = (e) => {
		const commentId = e.target.value;
		setIsDeleted(!isDeleted);
		fetch(`/deleteComment/${_id}/${commentId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				newComment,
				_id,
				uploadedImage,
				user: user.email,
			}),
		})
			.then((res) => res.json())
			.catch((err) => console.log(err));
	};
	const updateComment = (e, counter) => {
		setIsUpdate(true);
		setCommentToUpdate(counter);
		setIsDeleted(!isDeleted);
	};

	const UpdateHandler = (e) => {
		e.preventDefault();
		fetch(`/updateComment/${_id}/${commentToUpdate}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				comment: updatedComment,
				_id,
				image: uploadedImage,
				user: user.email,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setRefetch(!refetch);
				setIsUpdate(false);
			})
			.catch((err) => console.log(err));
	};
	const handleUpdatedChange = (e) => {
		setUpdatedComment(e.target.value);
	};

	return (
		<>
			{/* {console.log(item)} */}
			{item ? (
				<BigWrapper>
					<h1>{item.name}</h1>
					<div className='year'>{item.year}</div>
					{/* <Wrapper> */}

					<Image>
						<img src={item.shoeURL} alt={item.name} />
					</Image>

					<ShoeInfo>
						<p>{item.category}</p>
						<p>{item.description}</p>
					</ShoeInfo>
					{/* </Wrapper> */}
					<Form
						onSubmit={(e) => {
							handleCreateComment(e);
						}}
					>
						<input
							type='text'
							value={newComment}
							placeholder="What's your opinion?"
							onChange={handleChange}
						/>
						<ButtonDiv>
							<button type='submit'>Submit</button>
							<UploadPic setUploadedImage={setUploadedImage} />
						</ButtonDiv>
					</Form>

					<Comments>
						<div>
							{existingComments &&
								existingComments.map((comment) => {
									// console.log(comment);
									return (
										<>
											<CommentSection>
												<p>{comment.comment}</p>

												{comment.user === user.email && (
													<button
														value={comment.counter}
														onClick={deleteComment}
													>
														Delete
													</button>
												)}
												{comment.user === user.email && (
													<button
														value={comment.counter}
														onClick={(e) => {
															updateComment(e, comment.counter);
														}}
													>
														Update
													</button>
												)}
												{isUpdate && comment.counter === commentToUpdate && (
													<>
														<form onSubmit={UpdateHandler}>
															<UploadPic setUploadedImage={setUploadedImage} />
															<input
																type='text'
																value={updatedComment}
																onChange={handleUpdatedChange}
															/>
															<button>Save</button>
														</form>
													</>
												)}
												{comment.image && <img alt="" src={comment.image} />}
											</CommentSection>
										</>
									);
								})}
						</div>
					</Comments>
				</BigWrapper>
			) : (
				<div>
					<p>Loading...</p>
				</div>
			)}
		</>
	);
};
export default SneakerDetails;
const BigWrapper = styled.div`
	margin: 0;
	height: 100%;
	background-color: #f0ead6;
	width: 100%;
	h1 {
		text-align: center;
		font-size: 30px;
	}
	.year {
		text-align: center;
		margin-bottom: 5px;
		margin-top: 5px;
		font-weight: bold;
		font-size: 20px;
	}
`;
const Image = styled.image`
	display: flex;
	justify-content: center;
	margin-left: 300px;
	height: 375px;
	width: 600px;
	border-radius: 8px;
	margin-bottom: 20px;
	margin-top: 30px;
	/* box-shadow: 0 0 8px 8px white inset; */
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const Form = styled.form`
	margin: 20px 0 20px 0;
	display: flex;
	justify-content: center;
	input {
		width: 550px;
		height: 100px;
	}
`;
const ButtonDiv = styled.div`
	display: flex;
	justify-content: center;
`;
const ShoeInfo = styled.div`
	margin: 15px;
	width: 500px;
	display: flex;
	justify-content: center;
	margin-left: 400px;
`;
const Comments = styled.div`
	margin-left: 300px;
	display: flex;
	justify-content: center;
	gap: 10px;
	width: 500px;

	p {
		background-color: white;
		width: 300px;
	}
`;
const CommentSection = styled.div`
	/* display: grid;
	grid-template-columns: 500px; */
	margin: 20px 0 20px 0;
	border: 1px solid grey;
	background-color: white;
	img {
		height: 325px;
		width: 500px;
	}
`;
