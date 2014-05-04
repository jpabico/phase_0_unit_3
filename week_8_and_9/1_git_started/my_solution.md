## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<!-- Your defnition here -->
<code> git add fileName.rb</code>
or
<code> git add .</code> (to add all changed files)
add file contents to the index (staging area)

#### branch
<!-- Your defnition here -->
<code> git branch newBranchName</code>
create a new branch

#### checkout
<!-- Your defnition here -->
<code> git checkout branchName</code>
checkout a branch or paths to the working tree

#### clone
<!-- Your defnition here -->
<code> git clone url_of_repo_to_clone</code>
clone a repository into a new directory

#### commit
<!-- Your defnition here -->
<code> git commit -m "comment about commit"</code>
record changes to the repository

#### fetch
<!-- Your defnition here -->
<code> git fetch upstream</code>
download objects and refs from another repository (doesn't merge with current branch)

#### log
<!-- Your defnition here -->
<code> git log</code>
show commit logs

#### merge
<!-- Your defnition here -->
<code> git merge upstream/master</code>
join two or more development histories together

#### pull
<!-- Your defnition here -->
<code> git pull upstream master</code>
fetch from and integrate with another repository or a local branch

#### push
<!-- Your defnition here -->
<code> git push origin master</code>
update remote refs along with associated objects

#### reset
<!-- Your defnition here -->
<code> git reset</code>
reset current HEAD to the specified state

#### rm
<!-- Your defnition here -->
<code> git rm fileName.rb</code>
remove files from the working tree and from the index

#### status
<code> git status</code>
show the working tree status

## Release 3: Git Workflow

- Push files to a remote repository

<code>
	git init
	git remote -v
	git commit -m "description"
	git push
</code>
- Fetch changes
<code>
	git remote add upstream url_of_repo
	git fetch upstream
	git merge upstream/master
</code>
- Commit locally
<code>
	git commit -m "description"
</code>

## Reflection

This cleared up some of the things about Git that I was confused about 
at the beginning.  I am now comfortable with some of the commands since 
I've been using them.  But there are several other commands that I still 
haven't had a chance to use and am not entirely sure about how to use 
them.  I would normally do some experimentation, but I'm afraid I might 
erase or modify something accidently and won't be able to undo it.  This is a topic that I am gong to schedule a tutoring session for.






