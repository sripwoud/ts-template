if [ $(is-ci) ];then
  $1
else
  $2
fi
