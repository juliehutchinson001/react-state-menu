Buckets-Videos-Project

A header has two buttons: New Video, New Bucket

onClick(New Video) opens a videoModal:
video name **\_\_**\
video description > Video is going to VideoContainer
button (Create) \_/

onClick(New Bucket) opens a bucketModal:
bucket name **\_\_\_**\
 bucket description > Bucket is going to BucketContainer
button (Create) \_\_ /
———————————————————————————
Things Changing:
Video Name (input)
Video Description (input)
Bucket Name (input)
Bucket Description (input)
Videos in each bucket

————————————————————————————

```javascript
<App>
<Navigation>
	<NewVideo>
		<button> New Video </button>
		<form>
			<input /> Video Name
			<input /> Video Description
			<input type=“submit” /> Create
		</form>
	</NewVideo>
	<NewBucket>
		<button> New Bucket </button>
		<form>
			<input /> Bucket Name
			<input /> Bucket Description
			<input type=“submit” /> Create
		</form>
	</NewBucket>
</Navigation>
<Main>
	<BucketsContainer>
		<Bucket1> // Unnamed ‘’
			<Video1>
				Name: <h1></h1>
				Description: <p></p>
				<BucketsDropdown />
			</Video>
			<Video2>
				Name: <h1></h1>
				Description: <p></p>
				<BucketsDropdown />
			</Video>
		</Bucket1>
		<Bucket2>
			Name: <h1></h1>
			Description: <p></p>
			<Video1>
				Name
				Description
				<BucketsDropdown />
			</Video>
			<Video2>
				Name: <h1></h1>
				Description: <p></p>
				<BucketsDropdown />
			</Video>
		</Bucket1>
	</BucketsContainer>
</Main>
</App>

```
