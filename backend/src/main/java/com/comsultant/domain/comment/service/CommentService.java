package com.comsultant.domain.comment.service;

import com.comsultant.domain.account.entity.Account;
import com.comsultant.domain.comment.dto.CommentDto;
import com.comsultant.domain.comment.dto.CommentListDto;

public interface CommentService {

    CommentDto createComment(Account account, long productIdx, CommentDto commentDto);

    boolean updateComment(Account account, long commentIdx, CommentDto commentDto);

    boolean deleteComment(Account account, long commentIdx);

    CommentListDto getComments(Account account, int page, boolean desc);

    CommentListDto getProductComments(long productIdx, int page, boolean desc);

}
